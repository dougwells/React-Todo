var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import firebase from 'firebase';

import Login from 'Login';
import TodoApp from 'TodoApp';

//Middleware to keep pages private unless logged-in
var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }else{
    next();
  }
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('todos');
  }else{
    next();
  }
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
    	<Route path="todos" component={TodoApp} onEnter={requireLogin}/>
    	<IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
