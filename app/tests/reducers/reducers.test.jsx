var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers',()=>{
  describe('SearchTextReducer', ()=>{
    it("should set search text", ()=> {
      var action1 = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action1));
      expect(res).toEqual(action1.searchText);
    });
  });

  describe('showCompletedReducer', ()=>{
    it("should toggle True/False value of ToggleShowCompleted", ()=> {
      var action1 = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action1));
      expect(res).toEqual(true);
    });
  });

});
