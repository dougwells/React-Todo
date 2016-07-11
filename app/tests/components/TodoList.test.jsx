var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from "configureStore";
// var TodoList = require('TodoList');  --> switch to below
import ConnectedTodoList, {TodoList} from 'TodoList';
// var Todo = require('Todo');  --> switch to below
import ConnectedTodo, {Todo} from "Todo";


describe('TodoList', () => {

  it('should exist', () => {
    expect(TodoList).toExist;
  });

  it('should render 1 Todo component per array item', ()=>{
    var todos = [
      {id:1, text: "Code 1 hour", completed: false, completedAt: undefined, createdAt: 500},
      {id:2, text: "Prepare for meeting", completed: false, completedAt: undefined, createdAt: 500}
    ];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render encouraging message when no todos', ()=>{
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} showCompleted="true" searchText=""/>);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('p').length).toBe(1);
  });

});
