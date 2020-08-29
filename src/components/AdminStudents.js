import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentUser } from '../actions/currentUser';
import { startSetStudentsAdmin, setStudents } from '../actions/students';

export class AdminStudents extends React.Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			renderList: false,
		};
	}
	componentDidMount = () => {
		this._isMounted = true;

		if (this._isMounted) {
			this.props.startSetStudentsAdmin(this.props.currentUser.id).then(() => {
				const newStudents = [].concat(...this.props.students);
				this.props.setStudents(newStudents);
				this.setState({ renderList: true });
			});
		}
	};

	componentWillUnmount = () => {
		this._isMounted = false;
	};

	getStudents = () => {
		let students = [];
		for (let i = 0; i < this.props.students.length; i++) {
			students.push(
				<div key={this.props.students[i].id}>
					<Link
						onClick={this.onClick}
						to={`/student/${this.props.students[i].id}`}
					>
						{this.props.students[i].firstName} {this.props.students[i].lastName}
					</Link>
					<br />
				</div>
			);
		}

		return students;
	};
	render() {
		return (
			<div>
				<h3>Students</h3>
				{this.state.renderList ? (
					<div>{this.getStudents()}</div>
				) : (
					<div>
						<p>Loading...</p>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		students: state.students,
		currentUser: state.currentUser,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setStudents: (students) => dispatch(setStudents(students)),
		startSetStudentsAdmin: (user) => dispatch(startSetStudentsAdmin(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStudents);
