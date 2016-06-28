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

  describe('addTodoReducer', ()=>{
    var action1 = {
      type: 'ADD_TODO',
      text: 'Mow lawn'
    };

    it("should add new todo text when Add button clicked", ()=> {

      var res = reducers.todosReducer([],action1);
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action1.text);
    });

    it("should toggle completed & add completedAt if appropriate", ()=> {
      var todos = [
        {
          id: 1,
          text: "Lift weights",
          completed: false,
          createdAt: 1000,
          completedAt: undefined
        },
        {
          id: 2,
          text: "Mow Lawn",
          completed: false,
          createdAt: 1000,
          completedAt: undefined
        }
      ];

      var action2 = {
        type: 'TOGGLE_TODO',
        id: 2
      };

      var res = reducers.todosReducer((todos), df(action2));
      expect(res[1].id).toEqual(action2.id);
      expect(res[1].completed).toEqual(true);
      expect(res[1].completedAt).toNotEqual(undefined);
    });
  });



});
