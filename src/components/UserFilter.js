import React from 'react';
import { connect } from 'react-redux';
import { setUserTextFilter } from '../actions/userFilter';

export class UserFilter extends React.Component {
	onTextChange = (e) => {
		this.props.setUserTextFilter(e.target.value);
	};
	render() {
		return (
			<div>
				<input
					className="inputFieldStudent"
					placeholder="Search for users by email"
					type="text"
					value={this.props.userFilter.text}
					onChange={this.onTextChange}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userFilter: state.userFilter,
	};
};

const mapDispatchToProps = (dispatch) => ({
	setUserTextFilter: (text) => dispatch(setUserTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserFilter);
