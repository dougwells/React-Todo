var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist',  () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on search text change', () => {
    var searchText='Dog';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_TODO when completed box checked', () => {
    var action = {
      type: 'TOGGLE_TODO'
    };
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    todoSearch.refs.showCompleted.checked = false;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalled();
  });

});
