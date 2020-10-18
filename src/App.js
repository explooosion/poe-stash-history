import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';

import { FETCH_AUTH } from './reducers/auth';
import { FETCH_GUILD_PROFILE, FETCH_MEMBER_CHARACTERS } from './reducers/guild';
// import { FETCH_CHARACTERS, FETCH_ITEMS } from './reducers/account';

import Layout from './layout';

function App() {

  const dispatch = useDispatch();

  const { members, memberCharactersLoading, memberCharactersFinished } = useSelector(state => state.guild);

  if (!window.chrome.cookies && window.chrome.experimental) {
    window.chrome.cookies = window.chrome.experimental.cookies;
  }

  useEffect(() => {
    dispatch({ type: FETCH_AUTH });
    // dispatch({ type: FETCH_ITEMS });
    dispatch({ type: FETCH_GUILD_PROFILE });
    // dispatch({ type: FETCH_CHARACTERS });
  }, [dispatch]);

  useEffect(() => {
    if (members.length > 0 && !memberCharactersLoading && !memberCharactersFinished) {
      dispatch({ type: FETCH_MEMBER_CHARACTERS, params: members });
    }
  }, [dispatch, members, memberCharactersLoading, memberCharactersFinished]);

  console.log('ENV', process.env.NODE_ENV);

  return (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
