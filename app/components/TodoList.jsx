var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({



render: function(){
  var todos = this.props.todos;

  var renderTodos = function(){
    return todos.map(function(todo){
      return <Todo key={todo.id} {...todo}/>
    });
  };

  return(
    <div>
      <h2>TodoList.jsx</h2>
      {renderTodos()}
    </div>
  )
}

});

module.exports = TodoList;
