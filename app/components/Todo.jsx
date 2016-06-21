var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

handleToggle: function(){
  this.props.onToggle(this.props.id);
},

renderCompleteCheckBox: function(){
  var {completed, id, text, createdAt, completedAt} = this.props;
  var renderDate = ()=>{
    var message = completed ? "Completed: " : "Created: ";
    var timestamp = completed ? completedAt : createdAt;
    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
  }
    return (
      <div>
        <input type="checkbox" checked={completed} onChange={this.handleToggle}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
},

render: function(){
  return(
    <div>
      {this.renderCompleteCheckBox()}
    </div>
  )
}

});

module.exports = Todo;
