import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';

import { FETCH_AUTH } from './reducers/auth';
import { FETCH_GUILD_PROFILE, FETCH_MEMBER_CHARACTERS } from './reducers/guild';
import { FETCH_MY_ACCOUNT } from './reducers/account';

import Layout from './layout';

function App() {

  const dispatch = useDispatch();

  const { members, memberCharactersLoading, memberCharactersFinished } = useSelector(state => state.guild);

  useEffect(() => {
    dispatch({ type: FETCH_AUTH });
    dispatch({ type: FETCH_GUILD_PROFILE });
    dispatch({ type: FETCH_MY_ACCOUNT });
  }, [dispatch]);

  useEffect(() => {
    if (members.length > 0 && !memberCharactersLoading && !memberCharactersFinished) {
      dispatch({ type: FETCH_MEMBER_CHARACTERS, params: members });
    }
  }, [dispatch, members, memberCharactersLoading, memberCharactersFinished]);

  return (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
