var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({

  getInitialState: function(){
    return {
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

  render: function(){
    return(
      <div>
        <TodoList todos={this.state.todos}/>
        <br></br>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
