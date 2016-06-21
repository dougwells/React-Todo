var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
render: function(){
  var {todos} = this.props;
  var renderTodos = function(that){
    if(todos.length>0){
      return todos.map((todo)=>{
        return (
          <Todo key={todo.id} {...todo} onToggle={that.props.onToggle}/>
        )
      });
      } else {
        return <h6 className="container__message">Enter Your Todos to Get Started Now!</h6>
      }

  };

  return(
    <div>
      {renderTodos(this)}
    </div>
  )
}

});

module.exports = TodoList;
