var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');
var TodoAPI = require('TodoAPI');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist;
  });

  it('should add a todo on submit', () => {
    var text = "Do something";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(text);
    expect(todoApp.state.todos[0].text).toBe(text);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');

  });

  it('mark checkbox & change completed status to true', () => {
    var todoData = [{
    		id: 11,
    		text: "Test Features",
    		completed: false,
        createdAt: 60,
        completedAt: undefined
    	}];
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: todoData});
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);


    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });


});
