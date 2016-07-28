const React = require('react');
const ReactDOM = require('react-dom');
const Dummy = require('./amol.jsx');


const Test = React.createClass({
  render: function() {
    return (
    	<div className='class1'>
				hello hello 
				<Dummy />
    	</div>
    );
  }
});

module.exports = Test;

ReactDOM.render(<Test />, document.getElementById('container'));
//test
