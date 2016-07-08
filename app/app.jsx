var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');
var Main = require('Main');
var Login = require('Login');

var actions = require('actions');
var store = require('configureStore').configure();

store.dispatch(actions.startAddTodos());


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store = {store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}/>
      <Route path="todos" component={TodoApp}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);
