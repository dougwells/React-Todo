var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

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
  });

  it('should toggle change value when handleToggle called', () => {
    var todoData = [{
    		id: 11,
    		text: "Test Features",
    		completed: false
    	}];
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: todoData});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });


});
