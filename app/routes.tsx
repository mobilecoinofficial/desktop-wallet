import React, { FC, Fragment, useEffect } from 'react';

import { Button } from '@material-ui/core';
import { ipcRenderer } from 'electron';
import { useSnackbar } from 'notistack';
import { Switch, Redirect, Route } from 'react-router-dom';

import { WHITE_LIGHT } from './constants/colors';
import { routePaths } from './constants/routePaths';
import { ConnectedDashboardLayout } from './layouts/DashboardLayout';
import type { DashboardLayoutProps } from './layouts/DashboardLayout';
import {
  ConnectedAuthPage,
  ConnectedContactsPage,
  CrashReportPage,
  ConnectedDashboardPage,
  ConnectedGiftsPage,
  ConnectedHistoryPage,
  ConnectedSendReceivePage,
  ConnectedSettingsPage,
  NotFoundPage,
} from './pages';

type Routes = {
  Component?: React.Component;
  exact?: boolean;
  layout?: FC;
  path?: string | string[];
  routes?: Routes;
}[];

const RedirectToNotFound = (): JSX.Element => <Redirect to={routePaths.NOT_FOUND} />;
RedirectToNotFound.displayName = 'RedirectToNotFound';

const closeApp = () => ipcRenderer.send('close-app');

const DashboardLayoutWithClose: FC<DashboardLayoutProps> = ({ children }: DashboardLayoutProps) => (
  <ConnectedDashboardLayout onClose={closeApp}>{children}</ConnectedDashboardLayout>
);

const DashboardPageWithClose: FC = () => <ConnectedDashboardPage onClose={closeApp} />;

export const internalRoutes: Routes = [
  {
    Component: NotFoundPage,
    exact: true,
    path: routePaths.NOT_FOUND,
  },
  {
    Component: ConnectedAuthPage,
    exact: true,
    path: routePaths.ROOT,
  },
  {
    layout: DashboardLayoutWithClose,
    path: routePaths.APP,
    routes: [
      {
        Component: DashboardPageWithClose,
        exact: true,
        path: routePaths.APP_DASHBOARD,
      },
      {
        Component: ConnectedSendReceivePage,
        exact: true,
        path: routePaths.APP_TRANSACTION,
      },
      {
        Component: ConnectedGiftsPage,
        exact: true,
        path: routePaths.APP_GIFTING,
      },
      {
        Component: ConnectedHistoryPage,
        exact: true,
        path: routePaths.APP_HISTORY,
      },
      {
        Component: ConnectedContactsPage,
        exact: true,
        path: routePaths.APP_CONTACTS,
      },
      {
        Component: ConnectedSettingsPage,
        exact: true,
        path: routePaths.APP_SETTINGS,
      },

      ...(process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'
        ? [
            {
              Component: CrashReportPage,
              exact: true,
              path: routePaths.APP_CRASH_LOG,
            },
          ]
        : []),
      {
        Component: RedirectToNotFound,
      },
    ],
  },
  {
    layout: DashboardLayoutWithClose,
    path: '*',
    routes: [
      {
        Component: DashboardPageWithClose,
        exact: true,
        path: routePaths.ROOT,
      },
      {
        Component: RedirectToNotFound,
      },
    ],
  },
];

export const InternalRoutesRenderer: FC<{ routes: Routes }> = (props: { routes: Routes }) => {
  // TODO: the update checking flow should all get pulled out into an app container layer.
  // TODO: create an app container layer.
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  useEffect(() => {
    ipcRenderer.on('app-update-ready', () => {
      enqueueSnackbar(
        <>
          <div>An update is ready. Restart your application to stay up-to-date.</div>
          <Button
            onClick={() => closeSnackbar()}
            variant="contained"
            style={{ backgroundColor: WHITE_LIGHT, marginLeft: 10 }}
          >
            DISMISS
          </Button>
        </>,
        {
          persist: true,
          variant: 'info',
        }
      );
    });
    return () => {
      ipcRenderer.removeAllListeners('app-update-ready');
    };
  }, [enqueueSnackbar, closeSnackbar]);

  const { routes } = props;
  return (
    <Switch>
      {routes.map((route, i) => {
        const { Component, layout, exact, path, routes: nestedRoutes } = route;

        const Layout = layout || Fragment;

        return (
          <Route
            key={[path, i].join('|')}
            path={path}
            exact={exact}
            render={(routeProps) => (
              <Layout>
                {nestedRoutes ? (
                  <InternalRoutesRenderer routes={nestedRoutes} />
                ) : (
                  <Component {...routeProps} />
                )}
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  );
};
