var React = require('react');
var {connect} = require('react-redux');
// var Todo = require('Todo');  --> want the connected Todo which is the default export
import Todo from 'Todo';

export var TodoList = React.createClass({
render: function(){
  var {todos} = this.props;
  var renderTodos = function(that){
    if(todos.length>0){
      return todos.map((todo)=>{
        return (
          <Todo key={todo.id} {...todo}/>
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

//connect sets properties on prop
export default connect(
  (state)=>{
    return {
      todos: state.todos
    };
})(TodoList);
