import React from 'react';
import styled from 'styled-components';

const Main = styled.nav`
  position: absolute;
  top: 0;
  right: 3rem;
  display: flex;
  align-items: center;
  height: ${p => `calc(${p.theme.headerHeight} - 15px) `};
`;

function Navbar() {

  const userName = '變態欸紳士';

  return (
    <Main>
      Welcome, {userName}！
    </Main>
  )
}

export default Navbar;
