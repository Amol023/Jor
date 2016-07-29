 import Redux, { Component } from 'redux';
 import { connect } from 'react-redux';


 class FareList extends Component {
 	renderList() {
 		return this.props.uber.map((fare) => {
 			return (
 				<li class='eachFare'>{uber.cabRequest}</li>
 			);
 		});
 	}
 	render() {
 		return (
 			<ul className='farelist'>
 				{this.renderList()}
 			</ul>
 		)
 	}
 }


//function that connects react to redux 
//or the function that maps states to props
//or the function that connects view with data
function mapStateToProps(state) {
	return {
		uber: state.uber
	};
}

export default connect(mapStateToProps)(FareList);