var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo if valid text entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = 'Test';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith("Test");
  });

  it('should NOT call onAddTodo if blank todo entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

  it('should call onAddTodo and add item if conforming todo is entered', () => {
    var spy = expect.createSpy();
    var addText = "test";
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    addTodo.refs.todoText.value = addText;
    TestUtils.Simulate.submit(addTodo.refs.todoText);

    expect(spy).toHaveBeenCalledWith(addText);

    // var $el = $(ReactDOM.findDOMNode(addTodo));
    // addTodo.refs.todoText.value = 'test';
    // TestUtils.Simulate.submit($el.find('form')[0]);
    // expect(spy).toNotHaveBeenCalled();
  });

});
