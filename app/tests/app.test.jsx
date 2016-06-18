var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoApp = require('TodoApp');
var todoData = [{
		id: 11,
		text: "Test Features",
		completed: false
	}]

describe('App', () => {
  it('should properly run tests', () => {
    expect(1).toBe(1);
  });
  
  
  it('should toggle change value when handleToggle called', () => {
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: todoData});
    expect(todoApp.state.todos[0].completed).toBe('false');
    TestUtils.Simulate.todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe('true');
  });
  
});
