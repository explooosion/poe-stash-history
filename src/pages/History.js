import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import List from '../container/History/List';

import { FETCH_STASH_HISTORY } from '../reducers/guild';

const Main = styled.section``;

function History() {
  const dispatch = useDispatch();
  const { history, id } = useSelector(state => state.guild);

  useEffect(() => {
    if (id) dispatch({ type: FETCH_STASH_HISTORY, params: { id } });
  }, [dispatch, id]);

  return (
    <Main>
      <List data={history} />
    </Main>
  );
}

export default History;
