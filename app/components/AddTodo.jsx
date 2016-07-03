var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({

handleSubmit: function(event){
  event.preventDefault();
  var {dispatch} = this.props;
  var newTodo =this.refs.todoText.value;
  if(newTodo.length>0){
    this.refs.todoText.value = '';
    // this.props.onAddTodo(newTodo);
    dispatch(actions.startAddTodo(newTodo));
  }else{
    this.refs.todoText.focus();
  }
},

  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit = {this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?" />
          <button className="button hollow success">Add Todo</button>
        </form>
      </div>
    )
  }

});

// module.exports = AddTodo;
export default connect()(AddTodo);
