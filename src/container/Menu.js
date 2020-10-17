import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlinePieChart, AiOutlineProfile, AiOutlineGithub, AiOutlineUser, AiOutlineTrophy } from 'react-icons/ai';
import { transitions } from 'polished';

const Main = styled.nav`
  position: fixed;
  top: ${p => p.theme.headerHeight};
  left: 0;
  width: ${p => p.theme.menuWidth};
  height: ${p => `calc(100vh - ${p.theme.headerHeight}) `};
`;

const Container = styled.div`
  overflow-y: scroll;
  margin: 0 auto;
  width: 84%;
  height: 98%;
  background: rgba(89, 175, 236, 1);
  background: linear-gradient(180deg, rgba(89, 175, 236, 1) 0%, rgba(37, 140, 213, 1) 45%, rgba(20, 81, 125, 1) 100%);
  border-radius: .5rem;
`;

const List = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  a {
    display: flex;
    align-items: center;
    margin: .25rem 0;
    padding: 1rem;
    font-size: 12px;
    text-decoration: none;
    color: ${p => p.theme.white};
    opacity: .7;
    ${transitions('opacity .2s ease-in-out')};

    &:hover {
      opacity: 1;
    }

    svg {
      margin-right: 1rem;
      font-size: 22px;
    }
  }
`;

function Menu() {

  const list = [
    { id: 1, label: 'DASHBOARD', url: '/dashboard', icon: AiOutlinePieChart, external: false },
    { id: 2, label: 'HISTORY', url: '/history', icon: AiOutlineProfile, external: false },
    { id: 3, label: 'PLAYERS', url: '/players', icon: AiOutlineUser, external: false },
    { id: 4, label: 'STATISTICS', url: '/statistics', icon: AiOutlineTrophy, external: false },
    { id: 5, label: 'GITHUB', url: 'https://github.com/explooosion/poe-stash-history', icon: AiOutlineGithub, external: true },
  ];

  const renderItem = (item) => {
    const { id, label, url, icon: Icon, external } = item;
    return external ?
      (
        <a key={`menu-item-${id}`} href={url} target="_blank" rel="noopener noreferrer">
          <Icon />{label}
        </a>
      ) :
      (
        <Link key={`menu-item-${id}`} to={url}>
          <Icon />{label}
        </Link>
      );
  };

  return (
    <Main>
      <Container>
        <List>{list.map(item => renderItem(item))}</List>
      </Container>
    </Main>
  )
}

export default Menu;
