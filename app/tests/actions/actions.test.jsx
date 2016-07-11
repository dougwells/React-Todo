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
    var uid;
    var todosRef;

    beforeEach((done)=>{
      var credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN);
      firebase.auth().signInWithCredential(credential).then((user)=>{
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);
        return todosRef.remove()
      }).then(()=>{
        testTodoRef = todosRef.push();
        return testTodoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 125
        })
      })
      .then(()=> done())
      .catch(done);

    });
    afterEach((done)=>{
      todosRef.remove().then(()=>done());
    });

// Start FB startAddTodos Test
    it('should load initial FB database (1 todo per beforeTest above) when call startAddTodos()', (done)=>{
      const store = createMockStore({auth: {uid: uid}});
      const action = actions.startAddTodos()

      store.dispatch(action).then(()=>{
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'ADD_TODOS'
        });

        expect(mockActions[0].todos.length).toBe(1);

        expect(mockActions[0].todos).toInclude({
          text: 'Something to do'
        });
        done();

      }, done())
    });

    it('startAddTodo should generate addTodo object and dispatch ADD_TODO', (done)=>{
      const store = createMockStore({auth: {uid: uid}});
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
// End FB addTodo Test

    it('should toggle todo and dispatch UPDATE_TODO action', (done)=>{
      const store = createMockStore({auth: {uid: uid}});
      const action = actions.startToggleTodo(testTodoRef.key, true);
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

    it('login should generate login action', ()=>{
      var action = {
        type: 'LOGIN',
        uid: 123
      };
      var res = actions.login(action.uid);
      expect(res).toEqual(action);
    });

    it('logout should generate logout action', (done)=>{
      const store = createMockStore({auth: {uid: uid}});
      const action = actions.logout();
      store.dispatch(action).then(()=>{
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({uid: ""});
        done();
      }, done())
    });



  });
});
