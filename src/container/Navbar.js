import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Main = styled.nav`
  position: absolute;
  top: 0;
  right: 3rem;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${p => `calc(${p.theme.headerHeight} - 15px) `};
`;

const Title = styled.h3`
  position: absolute;
  width: 100%;
  text-align: center;
`;

const Info = styled.div`
  position: absolute;
  right: 0;
`;

function Navbar() {

  const { name, tag } = useSelector(state => state.guild);

  const userName = '變態欸紳士';

  return (
    <Main>
      <Title>{tag} {name}</Title>
      <Info> Welcome, {userName}！</Info>
    </Main>
  )
}

export default Navbar;
