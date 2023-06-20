import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../Home/Home';
import Generator from '../Generator/Generator';
import Battle from '../Battle/Battle';

function App() {
  const dispatch = useDispatch();
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/generator'>
          <Generator />
        </Route>
        <Route exact path='/battle'>
          <Battle />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
