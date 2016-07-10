var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoAPI = require('TodoAPI');
var Main = require('Main');
import Login from 'Login';
import TodoApp from 'TodoApp';
import firebase from 'firebase';

var actions = require('actions');
var store = require('configureStore').configure();

// firebase.auth().onAuthStateChange((user)=>{
// 	if(user){
// 		hashHistory.push('/todos');
// 	}else{
// 		hashHistory.push("/");
// 	}
//
// });

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
      	<IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
