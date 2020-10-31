import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import List from '../container/Members/List';

const Main = styled.section``;

function Members() {
  const { members } = useSelector((state) => state.guild);

  return (
    <Main>
      <List data={members} />
    </Main>
  );
}

export default Members;
