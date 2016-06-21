var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {

  it('should exist', () => {
    expect(TodoList).toExist;
  });

  it('should render 1 Todo component per array item', ()=>{
    var todos = [
      {id:1, text: "Code 1 hour"},
      {id:2, text: "Prepare for meeting"}
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render encouraging message when no todos', ()=>{
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('h6').length).toBe(1);
  });

});
