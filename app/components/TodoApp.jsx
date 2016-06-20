var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({


getInitialState: function(){
  if(localStorage.getItem('todos') === null){
    TodoAPI.setInitialTodos();
  }
  return {
    showCompleted: false,
    searchText: "",
    todos: TodoAPI.getTodos()
    }
},

  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },

handleAddTodo: function(text){
  this.setState({
    todos:[
      ...this.state.todos, {
        id: uuid(),
        text: text,
        completed: false
      }
  ]
});
},

handleSearch: function(showCompleted, searchText){
  console.log(searchText);
  this.setState({
    showCompleted: showCompleted,
    searchText: searchText.toLowerCase()
  });
},

handleToggle: function(id){
  var upDatedTodos = this.state.todos.map((todo)=>{
    if(todo.id === id){
      todo.completed = !todo.completed;
    }
    return todo;
  });
  this.setState({todos: upDatedTodos});
},

  render: function(){
    return(
      <div>
        <TodoSearch onSearch = {this.handleSearch} />
        <TodoList todos={this.state.todos} onToggle={this.handleToggle}/>
        <br></br>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
