import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Loading.css';


class Loading extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: 'Loading'
		}
	}
	
	render() {

		return (
			<div className="loading-wrapper">
				<div className="loader"></div>
				<p className="loading">
					{this.state.text}
				</p>
			</div>

		)
	}
}


Loading.defaultProps = {
	text: 'Loading'
};
Loading.propTypes = {
	text: PropTypes.string.isRequired
};

export default Loading;