import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import List from '../container/History/List';

const Main = styled.main`
`;

function History() {
  const { history } = useSelector(state => state.guild);
  return (
    <Main>
      <List data={history} />
    </Main>
  )
}

export default History;
