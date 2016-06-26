// var redux = require('redux');
// var actions = require('actions');

export var showCompletedReducer = (state=false, action)=>{
  switch (action.type){
    case "TOGGLE_SHOW_COMPLETED":
      return state = !state;
    default: return state;
  };
};

export var searchTextReducer = (state="", action)=>{
  switch (action.type){
    case "SET_SEARCH_TEXT":
      return state = action.searchText;
    default: return state;
  };
};

// var reducer = redux.combineReducers({
//   showCompleted: showCompletedReducer,
//   searchText: searchTextReducer,
//   todos: toDosReducer
// });
