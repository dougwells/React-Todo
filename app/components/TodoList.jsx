var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
render: function(){
  var {todos} = this.props;
  var renderTodos = function(that){
    return todos.map((todo)=>{
      return (
        <Todo key={todo.id} {...todo} onToggle={that.props.onToggle}/>
      )
    });
  };

  return(
    <div>
      <h2>TodoList.jsx</h2>
      {renderTodos(this)}
    </div>
  )
}

});

module.exports = TodoList;
