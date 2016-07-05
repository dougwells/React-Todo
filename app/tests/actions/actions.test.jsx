import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', ()=>{
  it('SET_SEARCH_TEXT should generate SET_SEARCH_TEXT action', ()=>{
    // var searchText = actions.setSearchText("Mow").searchText;
    // expect(searchText).toBe("Mow");
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: "Mow"
    };
    var res = actions.setSearchText('Mow');
    expect(res).toEqual(action);
  });

  it('Toggle_Show Completed should generate toggleShowCompleted action', ()=>{
    var action = {type: 'TOGGLE_SHOW_COMPLETED'};
    var res = actions.toggleShowCompleted()
    expect(action).toEqual(res);
  });

  it('addTodo should generate addTodo action', ()=>{
    // var newTodo = actions.addTodo("Mow Lawn");
    // expect(newTodo.text).toBe("Mow Lawn");
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: 123,
        text: 'anything',
        completed: false,
        createdAt: 100
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('startAddTodo should generate addTodo object and dispatch ADD_TODO', (done)=>{
    const store = createMockStore({});
    const todoText = "My todo item";

    store.dispatch(actions.startAddTodo(todoText)).then(
      ()=>{
        const actions = store.getActions();
        expect(actions[0]).toInclude({type: "ADD_TODO"});
        expect(actions[0].todo.text).toEqual(todoText);
        done();
      }
    ).catch(done);
  });

  it('should generate updateTodo action', ()=>{
    var action = {
      type: "UPDATE_TODO",
      id: 2,
      updates: {completed: false}
    };
    var res = actions.updateTodo(action.id, action.updates);
    expect(action).toEqual(res);
  });

  describe('Tests with Firebase todos', ()=>{
    var testTodoRef;

    beforeEach(()=>{
      testTodoRef = firebaseRef.child('todo').push();
      testTodoRef.set({
        text: 'Something to do',
        completed: false,
        createdAt: 125
      }).then(()=> done())  //single line fn so no { } needed
    });
    afterEach(()=>{
      testTodoRef.remove().then(()=>done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done)=>{
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true)
      store.dispatch(action).then(()=>{
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODOS',
          id: testTodoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completed).toExist();
        done();

      }, done())
    });
  });
});

  // it('should generate add todos action object', ()=>{
  //   var todos = [{
  //     id: '111',
  //     text: 'anything',
  //     completed: false,
  //     completedAt: undefined,
  //     createdAt: 33000
  //   }];
  //   var action = {
  //     type: 'ADD_TODOS',
  //     todos
  //   };
  //   var res = actions.startAddTodo(todos[0].text)(todos[0]);
  //   expect(res.text).toEqual(action.todos[0].text);
  // });

//   it('should generate add todos action object', () => {
//   var todos = [{
//     id: '111',
//     text: 'anything',
//     completed: false,
//     completedAt: undefined,
//     createdAt: 33000
//   }];
//   var action = {
//     type: 'ADD_TODOS',
//     todos
//   };
//   var res = actions.addTodos(todos);
//
//   expect(res).toEqual(action);
// });
