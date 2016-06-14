var React = require('react');

var Todo = React.createClass({



render: function(){
  return(
    <div>
      {this.props.id}. {this.props.text}
    </div>
  )
}

});

module.exports = Todo;
