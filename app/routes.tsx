import React, { FC, Fragment } from 'react';

import { Switch, Redirect, Route } from 'react-router-dom';

import AuthFlowGuard from './components/AuthFlowGuard';
import UnlockWalletGuard from './components/UnlockWalletGuard';
import WalletGuard from './components/WalletGuard';
import routePaths from './constants/routePaths';
import DashboardLayout from './layouts/DashboardLayout';
import { ContactsPage, GiftsPage, HistoryPage, SendReceivePage, SettingsPage } from './pages';
import { CreateAccountView, ImportAccountView, UnlockWalletView } from './views/auth';
import NotFoundView from './views/errors/NotFoundView';
import {
  ChangePasswordView,
  ChangePinView,
  ConfigureFullServiceView,
  DashboardView,
  RetrieveEntropyView,
  PrivacyPolicyView,
  TermsOfUseView,
} from './views/wallet';

type Routes = {
  Component?: any;
  exact?: boolean;
  guard?: FC;
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
      const { Component, guard, layout, exact, path, routes: nestedRoutes } = route;

      const Guard = guard || Fragment;
      const Layout = layout || Fragment;

      return (
        <Route
          key={[path, i].join('|')}
          path={path}
          exact={exact}
          render={(props) => (
            <Guard>
              <Layout>
                {nestedRoutes ? renderRoutes(nestedRoutes) : <Component {...props} />}
              </Layout>
            </Guard>
          )}
        />
      );
    })}
  </Switch>
);

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
      {
        Component: DashboardView,
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
        Component: ConfigureFullServiceView,
        exact: true,
        path: routePaths.APP_SETTINGS_CONFIGURE_FULL_SERVICE,
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
