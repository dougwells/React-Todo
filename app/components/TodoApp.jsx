var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: 1,
          text: "Mow lawn"
        },
        {
          id: 2,
          text: "Grocery shop"
        },
        {
          id: 3,
          text: "Clean up house"
        },
        {
          id: 4,
          text: "Take out trash"
        }
      ]
    }
  },

handleAddTodo: function(text){
  var newText = text;
  var newId = this.state.todos[this.state.todos.length-1].id+1;
  var newTodosArray = this.state.todos;
  newTodosArray.push({id:newId, text:newText});
  this.setState({todos:newTodosArray});
},

handleSearch: function(showCompleted, searchText){
  console.log(searchText);
  this.setState({
    showCompleted: showCompleted,
    searchText: searchText.toLowerCase()
  });

},

  render: function(){
    return(
      <div>
        <TodoSearch onSearch = {this.handleSearch} />
        <TodoList todos={this.state.todos}/>
        <br></br>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
