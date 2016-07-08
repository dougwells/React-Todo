var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');
var Main = require('Main');
var Login = require('Login');
import firebase from '/app/firebase/';

var actions = require('actions');
var store = require('configureStore').configure();

firebase.auth().onAuthStateChange((user)=>{
	if(user){
		hashHistory.push('/todos');
	}else{
		hashHistory.push("/");
	}

});

store.dispatch(actions.startAddTodos());


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store = {store}>
    <Router history={hashHistory}>
      <Route path="/">
      	<Route path="todos" component={TodoApp}/>
      	<Route path="/" component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
