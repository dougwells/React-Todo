var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

//non-connected AddTodo
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO if valid text entered', () => {
    var spy = expect.createSpy();
    var todoText = "Test"
    var action = {
      type: 'ADD_TODO',
      text: todoText
    };
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalled();
  });


  it('should NOT dispatch ADD_TODO if blank todo entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

  it('should call onAddTodo and add item if conforming todo is entered', () => {
    var spy = expect.createSpy();
    var addText = "test";
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    addTodo.refs.todoText.value = addText;
    TestUtils.Simulate.submit(addTodo.refs.todoText);

    expect(spy).toHaveBeenCalled();

    // var $el = $(ReactDOM.findDOMNode(addTodo));
    // addTodo.refs.todoText.value = 'test';
    // TestUtils.Simulate.submit($el.find('form')[0]);
    // expect(spy).toNotHaveBeenCalled();
  });

});
