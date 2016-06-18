var React = require('react');

var Todo = React.createClass({

handleToggle: function(){
  this.props.onToggle(this.props.id);
},

renderCompleteCheckBox: function(){
  var {completed,id, text} = this.props;
    return (
      <div>
        <input type="checkbox" checked={completed} onChange={this.handleToggle}/>  {text}
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
