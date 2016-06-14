var React = require('react');
var TodoList = require('TodoList');

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


  render: function(){
    return(
      <div>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
