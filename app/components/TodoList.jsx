var React = require('react');
var {connect} = require('react-redux');
// var Todo = require('Todo');  --> want the connected Todo which is the default export
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
render: function(){
  var {todos, showCompleted, searchText} = this.props;
  console.dir(todos)
  var renderTodos = ()=>{
    if(todos.length === 0) {
      return (
        <p className="container__message">Enter Your Todos to Get Started Now!</p>
        );
    }
    if(todos.length>0){
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo)=>{
        return (
          <Todo key={todo.id} {...todo}/>
        )
      });
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
    return state;
})(TodoList);
