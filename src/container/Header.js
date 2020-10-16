import React from 'react';
import styled from 'styled-components';

const Main = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${p => p.theme.headerHeight};
`;

const Title = styled.div`
  margin-left: 2.5rem;
  font-weight: normal;
  text-transform: uppercase;
`;

function Header() {
  return (
    <Main>
      <Title>DASHBOARD</Title>
    </Main>
  )
}

export default Header;
