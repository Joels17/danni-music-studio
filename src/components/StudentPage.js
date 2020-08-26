import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startAddStudent, startSetStudents } from '../actions/students';
import { currentStudent } from '../actions/currentStudent';

export class StudentPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			birthDate: '',
			error: '',
			addStudentRequest: !this.props.students.length > 0,
		};
	}

	lastNameOnChange = (e) => {
		this.setState({ lastName: e.target.value });
	};
	firstNameOnChange = (e) => {
		this.setState({ firstName: e.target.value });
	};
	birthDateOnChange = (e) => {
		this.setState({ birthDate: e.target.value });
	};

	onAddStudentClick = () => {
		this.setState({ addStudentRequest: true });
	};

	onSubmit = (e) => {
		e.preventDefault();

		if (
			!this.state.firstName ||
			!this.state.lastName ||
			!this.state.birthDate
		) {
			this.setState(() => ({
				error: 'Please provide first name, last name, and birthdate',
			}));
		} else {
			this.setState(() => ({ error: '' }));
			this.setState(() => ({ addStudentRequest: false }));
			this.props.startAddStudent({
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				birthDate: this.state.birthDate,
			});
		}
	};
	render() {
		return (
			<div>
				{this.state.addStudentRequest ? (
					<div>
						<h2>Input values for student</h2>
						<form onSubmit={this.onSubmit}>
							<input
								type="text"
								placeholder="First Name"
								onChange={this.firstNameOnChange}
							/>
							<input
								type="text"
								placeholder="Last Name"
								onChange={this.lastNameOnChange}
							/>
							<input
								type="text"
								placeholder="Birthdate"
								onChange={this.birthDateOnChange}
							/>
							<button>Add Student</button>
						</form>
					</div>
				) : (
					this.props.students.map((student) => {
						return (
							<div key={student.id}>
								<Link onClick={this.onClick} to={`/student/${student.id}`}>
									{student.firstName}
								</Link>
							</div>
						);
					})
				)}
				{!this.state.addStudentRequest ? (
					<button className="button" onClick={this.onAddStudentClick}>
						Add another student
					</button>
				) : (
					''
				)}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		students: state.students,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		startAddStudent: (student) => dispatch(startAddStudent(student)),
		currentStudent: (student) => dispatch(currentStudent(student)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);
