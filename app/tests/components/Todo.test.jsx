var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist;
  });

  it('should call props.onToggle w/id when user clicks completed', ()=>{
    var todoData = [{
      id: 199,
      text: 'test data',
      completed: true
    }];
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} onToggle={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.change($el.find('input')[0]);

    expect(spy).toHaveBeenCalled();
  });
});
