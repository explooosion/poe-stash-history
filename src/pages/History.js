import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import List from '../container/History/List';

const Main = styled.main`
`;

function History() {
  // const auth = useSelector(state => state.auth);
  const stash = useSelector(state => state.stash);
  return (
    <Main>
      <List data={stash.history.entries} />
    </Main>
  )
}

export default History;
