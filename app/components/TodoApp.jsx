var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({

  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: "",
      todos: [
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
      ]
    }
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
  // var newText = text;
  // var newId = this.state.todos[this.state.todos.length-1].id+1;
  // var newTodosArray = this.state.todos;
  // newTodosArray.push({id:newId, text:newText});
  // this.setState({todos:newTodosArray});
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
