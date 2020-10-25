import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BreadCrumb } from 'primereact/breadcrumb';
import _ from 'lodash';

import Routes, { GlobaleRoutes } from '../routes';

import Header from '../container/Header';
import Menu from '../container/Menu';
import Navbar from '../container/Navbar';

const Main = styled.main`
`;

const Container = styled.div`
`;

const Content = styled.section`
  margin-top: ${p => p.theme.headerHeight};
  margin-left: ${p => p.theme.menuWidth};
  padding-right: 2rem;
`;

const Bread = styled(BreadCrumb)`
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
`;

function Layout() {
  const { pathname } = useLocation();
  const { cookie } = useSelector(state => state.auth);

  const breadModel = useMemo(() => pathname.substring(1).split('/').map(p => ({ label: p.toUpperCase() })), [pathname]);
  const breadHome = { icon: 'pi pi-home', url: '/' };

  const renderRoute = route => {
    const { key, path, exact, component: Component } = route;
    return (<Route key={key} exact={exact} path={path} component={Component} />);
  }

  const renderRoutes = () => {
    return (
      <>
        {Routes.map(route => renderRoute(route))}
        <Redirect to="/dashboard" />
      </>
    );
  }

  const renderGlobalRoutes = () => {
    return (
      <>
        {GlobaleRoutes.map(route => renderRoute(route))}
        <Redirect to="/login" />
      </>
    );
  }

  if (_.isNull(cookie)) {
    return (
      <Main>
        <Header />
        {renderGlobalRoutes()}
      </Main>
    );
  }

  return (
    <Main>
      <Header />
      <Menu />
      <Container>
        <Navbar />
        <Content>
          <Bread model={breadModel} home={breadHome} />
          <Switch>
            {renderRoutes()}
          </Switch>
        </Content>
      </Container>
    </Main>
  )
}

export default Layout;
