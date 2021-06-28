import React, { FC, Fragment } from 'react';

import { ipcRenderer } from 'electron';
import { Switch, Redirect, Route } from 'react-router-dom';

import routePaths from './constants/routePaths';
import { DashboardLayout } from './layouts/DashboardLayout';
import type { DashboardLayoutProps } from './layouts/DashboardLayout';
import {
  AuthPage,
  ContactsPage,
  DashboardPage,
  GiftsPage,
  HistoryPage,
  SendReceivePage,
  SettingsPage,
  NotFoundPage,
} from './pages';

type Routes = {
  Component?: any;
  exact?: boolean;
  layout?: FC;
  path?: string | string[];
  routes?: Routes;
}[];

const RedirectToNotFound = (): JSX.Element => <Redirect to={routePaths.NOT_FOUND} />;
RedirectToNotFound.displayName = 'RedirectToNotFound';

export const renderRoutes = (routes: Routes = [], testComponent?: JSX.Element): JSX.Element => (
  <Switch>
    {testComponent && (
      <Route key="test-component" path="/test" exact render={() => testComponent} />
    )}
    {routes.map((route, i) => {
      const { Component, layout, exact, path, routes: nestedRoutes } = route;

      const Layout = layout || Fragment;

      return (
        <Route
          key={[path, i].join('|')}
          path={path}
          exact={exact}
          render={(props) => (
            <Layout>{nestedRoutes ? renderRoutes(nestedRoutes) : <Component {...props} />}</Layout>
          )}
        />
      );
    })}
  </Switch>
);

const closeApp = () => ipcRenderer.send('close-app');

const DashboardLayoutWithClose: FC<DashboardLayoutProps> = ({ children }: DashboardLayoutProps) => (
  <DashboardLayout onClose={closeApp}>{children}</DashboardLayout>
);

const DashboardPageWithClose: FC = () => <DashboardPage onClose={closeApp} />;

const routes: Routes = [
  {
    Component: NotFoundPage,
    exact: true,
    path: routePaths.NOT_FOUND,
  },
  {
    Component: AuthPage,
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
        Component: SendReceivePage,
        exact: true,
        path: routePaths.APP_TRANSACTION,
      },
      {
        Component: GiftsPage,
        exact: true,
        path: routePaths.APP_GIFTING,
      },
      {
        Component: HistoryPage,
        exact: true,
        path: routePaths.APP_HISTORY,
      },
      {
        Component: ContactsPage,
        exact: true,
        path: routePaths.APP_CONTACTS,
      },
      {
        Component: SettingsPage,
        exact: true,
        path: routePaths.APP_SETTINGS,
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

export default routes;
