var $ = require('jquery');
var uuid = require('node-uuid');

module.exports = {

  setInitialTodos: function(){
    localStorage.setItem('todos', JSON.stringify(initialTodos));
  },


  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return(todos);
    }
  },

  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      var todos = JSON.parse(stringTodos);
    } catch(err) {
      console.log("Error: getTodos could not updating todos", err);
    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;
    //filter by showCompleted
    var filteredTodos = todos.filter((todo)=>{
      return (!todo.completed || showCompleted);
    });

    //filter by searchText

    //Sort todos w not-completed at top

    return filteredTodos;

  }
}

var initialTodos = [
  {
    id: uuid(),
    text: "Mow lawn",
    completed: false
  },
  {
    id: uuid(),
    text: "Grocery shop",
    completed: true
  },
  {
    id: uuid(),
    text: "Clean up house",
    completed: false
  },
  {
    id: uuid(),
    text: "Take out trash",
    completed: false
  }
];
