var React = require('react');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var rootUrl = 'https://thesetodos.firebaseio.com/';

var App = React.createClass({
	mixins: [ReactFire],
	componentWillMount: function () {
		this.bindAsObject(new FireBase(rootUrl + 'items/'), 'items');
		// this.state.items => {}
	},
  render: function() {
		console.log(this.state);

    return <h1>
      Hello, React!
    </h1>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
