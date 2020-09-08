import React from 'react';
import { connect } from 'react-redux';
import { startSetStudents } from '../actions/students';
import { history } from '../routers/AppRouter';
import { setFiles } from '../actions/files';
import { currentUser } from '../actions/currentUser';
import { getUsersAdmin } from '../actions/users';

export class LoadingPage extends React.Component {
	componentDidMount = () => {
		if (this.props.isAdmin) {
			history.push('/home');
		} else {
			this.props.setFiles([]);
			this.props.currentUser('');
			this.props.getUsersAdmin([]);
			this.props.startSetStudents().then(() => {
				history.push('/students');
			});
		}
	};

	render() {
		return (
			<div>
				<p>Fetching data...</p>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		startSetStudents: () => dispatch(startSetStudents()),
		setFiles: (files) => dispatch(setFiles(files)),
		currentUser: (user) => dispatch(currentUser(user)),
		getUsersAdmin: (users) => dispatch(getUsersAdmin(users)),
	};
};
const mapStateToProps = (state) => {
	return {
		students: state.students,
		isAdmin: state.isAdmin,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);
