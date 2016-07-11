var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');
var actions = require('actions');

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

  describe('authReducer', ()=>{
    it("should add uid on login", ()=> {
      var action1 = {
        type: 'LOGIN',
        uid: 123
      };
      var res = reducers.authReducer(df({uid:'abc'}), df(action1));
      expect(res.uid).toEqual(action1.uid);
    });

    it("should empty uid on logout", ()=> {
      var action2 = {
        type: 'LOGOUT'
      };
      var res = reducers.authReducer(df({uid:'abc'}), df(action2));
      expect(res.uid.length).toEqual(0);
    });
  });

  describe('addTodoReducer', ()=>{
    var action1 = {
      type: 'ADD_TODO',
      todo: {
        id:123,
        text: "Debug code",
        completed: false,
        createdAt: 100
      }
    };

    it("should add new todo text when Add button clicked", ()=> {
      var res = reducers.todosReducer([],action1);
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action1.todo);
    });

    it("should update completed & add completedAt if appropriate", ()=> {
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
          completed: true,
          createdAt: 1000,
          completedAt: 2000
        }
      ];

      var updates = {
        completed: false,
        completedAt: null
      }

      var action2 = {
        type: 'UPDATE_TODO',
        id: 2,
        updates
      };

      var res = reducers.todosReducer((todos), df(action2));
      expect(res[1].id).toEqual(action2.id);
      expect(res[1].completed).toEqual(false);
      expect(res[1].completedAt).toEqual(null);
      expect(res[1].text).toEqual(todos[1].text);
    });

    it('should add existing todos', ()=>{
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }];

      var action = {
        type:'ADD_TODOS',
        todos: todos
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });





});
