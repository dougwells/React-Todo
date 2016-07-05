import moment from 'moment';

import firebase, {firebaseRef} from 'app/firebase/index';
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
    var todosRef = firebaseRef.child('todos').once('value');
    return todosRef.then(
      (snapshot) => {
        console.log("snapshot", initialTodos, snapshot.val())
        return dispatch(addTodos(initialTodos));
      }
    )
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
    var todoRef = firebaseRef.child('todos').push(todo);
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
    var todoRef = firebaseRef.child('todos/'+id);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates).then(
      ()=>{dispatch(updateTodo(id, updates));}
    )
  }
}
