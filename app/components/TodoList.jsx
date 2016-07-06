var React = require('react');
var {connect} = require('react-redux');
// var Todo = require('Todo');  --> want the connected Todo which is the default export
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
render: function(){
  var {todos, showCompleted, searchText} = this.props;
  var displayArr = TodoAPI.filterTodos(todos, showCompleted, searchText);

  var renderTodos = ()=>{
    console.log(!showCompleted && displayArr ===0)
    console.log("todos & display Arrays", todos, displayArr);
    if(displayArr.length ===0) {
      return (
        <p className="container__message">Enter Your Todos to Get Started Now!</p>
        );
    }
    if(displayArr.length>0){
      return displayArr.map((todo)=>{
        return (
          <Todo key={todo.id} {...todo}/>
        )
      });
      }

  };

  return(
    <div>
      {renderTodos()}
    </div>
  )
}

});

//connect sets properties on prop
export default connect(
  (state)=>{
    return state;
})(TodoList);
