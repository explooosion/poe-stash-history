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
  font-size: 1.25rem;
  text-align: center;
`;

const Info = styled.div`
  position: absolute;
  right: 0;
  font-size: 1rem;
`;

function Navbar() {
  const { name, tag } = useSelector(state => state.guild);
  const { accountName } = useSelector(state => state.account);

  return (
    <Main>
      <Title>
        {tag} {name}
      </Title>
      <Info> Welcome, {accountName}！</Info>
    </Main>
  );
}

export default Navbar;
