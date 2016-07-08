var React = require('react');

export var Login = () => {
  return (
    <div>
    	<div className="page-actions">
  			<a href="#">Logout</a>
  		</div>
    	<h1 className="title-page">Dougs Todo App</h1>
    	<div className="row">
    		<div className = "columns small-centered small-10 medium-6 large-4">
    			<div className="callout callout-auth">
    				<h3>Login</h3>
    				<p>Login with Github account below.</p>
    				<button className="button">Login with Github</button>
    			</div>
    		</div>
    	</div>
    </div>
  );
}

module.exports = Login;
