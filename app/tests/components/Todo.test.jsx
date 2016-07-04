var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {Todo} = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist;
  });

  it('should dispatch TOGGLE_TODO action on click', ()=>{
    var todoData = [{
      id: 199,
      text: 'test data',
      completed: true
    }];

    var action = actions.startToggleTodo(todoData[0].id, !todoData[0].completed);
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} dispatch={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.change($el.find('input')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
