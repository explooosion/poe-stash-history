import React from 'react';
import styled from 'styled-components';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BreadCrumb } from 'primereact/breadcrumb';

import Routes from '../routes';

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

function Layout() {
  const location = useLocation();

  const breadModel = location.pathname.substring(1).split('/').map(p => ({ label: p.toUpperCase() }));
  const breadHome = { icon: 'pi pi-home', url: '/' };

  const renderRoute = route => {
    const { key, path, exact, component: Component, title } = route;
    return (
      <Route
        key={key}
        exact={exact}
        path={path}
        title={title}
        render={props => (
          <>
            <Helmet>
              <title>POE STASH HISTORY</title>
            </Helmet>
            <Component {...props} />
          </>
        )}
      />
    );
  }

  return (
    <Main>
      <Menu />
      <Header />
      <Container>
        <Navbar />
        <Content>
          <BreadCrumb model={breadModel} home={breadHome} style={{ marginBottom: '1rem' }} />
          <Switch>
            {Routes.map(route => renderRoute(route))}
          </Switch>
        </Content>
      </Container>
    </Main>
  )
}

export default Layout;
