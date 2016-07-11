import moment from 'moment';

import firebase, {firebaseRef, githubProvider} from 'app/firebase/index';
var initialTodos = require('TodoAPI').initialTodos;

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export var toggleShowCompleted = ()=>{
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
};

export var startAddTodos = () => {
  return (dispatch, getState) =>{
    var uid = getState().auth.uid;
    var userChild = 'users/'+uid+'/todos';
    var todosRef = firebaseRef.child(userChild).once('value');
    // var todosRef = firebaseRef.child(`users/${uid}/todos`).once('value');
    return todosRef.then(
      (snapshot) => {
        var todos = snapshot.val() || {};
        var parsedTodos = [];

        Object.keys(todos).forEach((todoId)=>{
          parsedTodos.push({
            id: todoId,
            ...todos[todoId]
          });
        });
        return dispatch(addTodos(parsedTodos));

        //OR ... return seeded Todos
        // return dispatch(addTodos(initialTodos));

      })

      }
  };

export var startAddTodo = (text)=>{
  return (dispatch, getState)=>{
    var todo =  {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var uid = getState().auth.uid;
    var userChild = 'users/'+uid+'/todos';
    var todoRef = firebaseRef.child(userChild).push(todo);
    // var todosRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then(
      ()=>{dispatch(addTodo(
        {
        ...todo,
        id:todoRef.key
      }
      ))},
      (err)=>{console.log("Error in startAddTodo Action", err)}
    );
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child('users/'+uid+'todos/'+id);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates).then(
      ()=>{dispatch(updateTodo(id, updates));}
    )
  }
};

export var startLogin = ()=>{
  return (dispatch, getState)=>{
    return firebase.auth().signInWithPopup(githubProvider).then(
      (result)=>{
        // dispatch(login(result.user.uid));
      },
      (e)=>{console.log("Unable to auth. ",e);}
    );
  };
};

export var startLogout = ()=>{
  return (dispatch, getState)=>{
    return firebase.auth().signOut().then(
    ()=>{
      // dispatch(logout());
    });
  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};
