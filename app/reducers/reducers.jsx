var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state="", action)=>{
  switch (action.type){
    case "SET_SEARCH_TEXT":
      return state = action.searchText;
    default: return state;
  };
};

export var showCompletedReducer = (state=false, action)=>{
  switch (action.type){
    case "TOGGLE_SHOW_COMPLETED":
      return state = !state;
    default: return state;
  };
};

export var todosReducer = (state=[], action)=>{
  switch (action.type){
    case "ADD_TODO":
      return [
        ...state, {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];

    case "ADD_TODOS":
      return [...state, ...action.todos];

    case "TOGGLE_TODO":
      return state.map((todo)=>{
        if(todo.id === action.id){
          todo.completed = !todo.completed;
          if(todo.completed) {
            todo.completedAt = moment().unix();
          } else {
            todo.completedAt = undefined;
          }
        };
        return todo;
      });


    default: return state;
  };
};



// var reducer = redux.combineReducers({
//   showCompleted: showCompletedReducer,
//   searchText: searchTextReducer,
//   todos: todosReducer
// });
