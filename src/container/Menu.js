import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  AiOutlinePieChart,
  AiOutlineProfile,
  AiOutlineGithub,
  AiOutlineUser,
  AiOutlineCrown,
} from 'react-icons/ai';
import { transitions } from 'polished';

const Main = styled.nav`
  position: fixed;
  top: ${(p) => p.theme.headerHeight};
  left: 0;
  width: ${(p) => p.theme.menuWidth};
  height: ${(p) => `calc(100vh - ${p.theme.headerHeight}) `};
`;

const Container = styled.div`
  overflow-y: scroll;
  margin: 0 auto;
  width: 84%;
  height: 98%;
  background: rgba(89, 175, 236, 1);
  background: linear-gradient(
    180deg,
    rgba(89, 175, 236, 1) 0%,
    rgba(37, 140, 213, 1) 45%,
    rgba(20, 81, 125, 1) 100%
  );
  border-radius: 0.25rem;
`;

const List = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  a {
    display: flex;
    align-items: center;
    margin: 0.25rem 0;
    padding: 1rem;
    font-size: 12px;
    text-decoration: none;
    color: ${(p) => p.theme.white};
    opacity: 0.7;
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

const list = [
  {
    id: 1,
    label: 'DASHBOARD',
    url: '/dashboard',
    icon: AiOutlinePieChart,
    external: false,
  },
  {
    id: 2,
    label: 'HISTORY',
    url: '/history',
    icon: AiOutlineProfile,
    external: false,
  },
  {
    id: 3,
    label: 'MEMBERS',
    url: '/members',
    icon: AiOutlineUser,
    external: false,
  },
  {
    id: 5,
    label: 'GITHUB',
    url: 'https://github.com/explooosion/poe-stash-history',
    icon: AiOutlineGithub,
    external: true,
  },
  {
    id: 6,
    label: 'GARENA',
    url: 'https://web.poe.garena.tw',
    icon: AiOutlineCrown,
    external: true,
  },
];

function Menu() {
  const { pathname } = useLocation();

  const renderItem = (item) => {
    const { id, label, url, icon: Icon, external } = item;
    return external ? (
      <a
        key={`menu-item-${id}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon />
        {label}
      </a>
    ) : (
      <Link key={`menu-item-${id}`} to={url} replace={url === pathname}>
        <Icon />
        {label}
      </Link>
    );
  };

  return (
    <Main>
      <Container>
        <List>{list.map((item) => renderItem(item))}</List>
      </Container>
    </Main>
  );
}

export default Menu;
