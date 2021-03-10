import React, { Fragment } from 'react';

import { Switch, Redirect, Route } from 'react-router-dom';

import AuthFlowGuard from './components/AuthFlowGuard';
import UnlockWalletGuard from './components/UnlockWalletGuard';
import WalletGuard from './components/WalletGuard';
import routePaths from './constants/routePaths';
import DashboardLayout from './layouts/DashboardLayout';
import { CreateAccountView, ImportAccountView, UnlockWalletView } from './views/auth';
import NotFoundView from './views/errors/NotFoundView';
import {
  ChangePasswordView,
  ChangePinView,
  ConfigureMobilecoindView,
  ContactPanel,
  DashboardView,
  GiftingView,
  HistoryView,
  RetrieveEntropyView,
  SettingsView,
  PrivacyPolicyView,
  TermsOfUseView,
  TransactionView,
} from './views/wallet';

type Routes = {
  Component?: any;
  exact?: boolean;
  guard?: React.FC;
  layout?: React.FC;
  path?: string | string[];
  routes?: Routes;
}[];

const RedirectToNotFound = (): JSX.Element => {
  return <Redirect to={routePaths.NOT_FOUND} />;
};
RedirectToNotFound.displayName = 'RedirectToNotFound';

export const renderRoutes = (routes: Routes = [], testComponent?: JSX.Element): JSX.Element => {
  return (
    <Switch>
      {testComponent && (
        <Route
          key="test-component"
          path="/test"
          exact
          render={() => {
            return testComponent;
          }}
        />
      )}
      {routes.map((route, i) => {
        const { Component, guard, layout, exact, path, routes: nestedRoutes } = route;

        const Guard = guard || Fragment;
        const Layout = layout || Fragment;

        return (
          <Route
            key={[path, i].join('|')}
            path={path}
            exact={exact}
            render={(props) => {
              return (
                <Guard>
                  <Layout>
                    {nestedRoutes ? renderRoutes(nestedRoutes) : <Component {...props} />}
                  </Layout>
                </Guard>
              );
            }}
          />
        );
      })}
    </Switch>
  );
};

const routes: Routes = [
  {
    Component: NotFoundView,
    exact: true,
    path: routePaths.NOT_FOUND,
  },
  {
    Component: UnlockWalletView,
    exact: true,
    guard: UnlockWalletGuard,
    path: routePaths.ROOT,
  },
  {
    Component: CreateAccountView,
    exact: true,
    guard: AuthFlowGuard,
    path: routePaths.CREATE,
  },
  {
    Component: ImportAccountView,
    exact: true,
    guard: AuthFlowGuard,
    path: routePaths.IMPORT,
  },
  {
    guard: WalletGuard,
    layout: DashboardLayout,
    path: routePaths.APP,
    routes: [
      ...(process.env.NODE_ENV === 'development'
        ? [
            {
              Component: ContactPanel,
              exact: true,
              path: '/app/CONTACTNEWFORM',
            },
          ]
        : []),
      {
        Component: DashboardView,
        exact: true,
        path: routePaths.APP_DASHBOARD,
      },
      {
        Component: TransactionView,
        exact: true,
        path: routePaths.APP_TRANSACTION,
      },
      {
        Component: GiftingView,
        exact: true,
        path: routePaths.APP_GIFTING,
      },
      {
        Component: HistoryView,
        exact: true,
        path: routePaths.APP_HISTORY,
      },
      {
        Component: SettingsView,
        exact: true,
        path: routePaths.APP_SETTINGS,
      },
      {
        Component: ChangePasswordView,
        exact: true,
        path: routePaths.APP_SETTINGS_CHANGE_PASSWORD,
      },
      {
        Component: ChangePinView,
        exact: true,
        path: routePaths.APP_SETTINGS_CHANGE_PIN,
      },
      {
        Component: RetrieveEntropyView,
        exact: true,
        path: routePaths.APP_SETTINGS_RETRIEVE_ENTROPY,
      },
      {
        Component: ConfigureMobilecoindView,
        exact: true,
        path: routePaths.APP_SETTINGS_CONFIGURE_MOBILECOIND,
      },
      {
        Component: TermsOfUseView,
        exact: true,
        path: routePaths.APP_SETTINGS_TERMS_OF_USE,
      },
      {
        Component: PrivacyPolicyView,
        exact: true,
        path: routePaths.APP_SETTINGS_PRIVACY_POLICY,
      },
      {
        Component: RedirectToNotFound,
      },
    ],
  },
  {
    layout: DashboardLayout,
    path: '*',
    routes: [
      {
        Component: DashboardView,
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
