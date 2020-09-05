import React from 'react';
import { connect } from 'react-redux';
import { startAddStudent } from '../actions/students';
import { history } from '../routers/AppRouter';

export class AddStudentPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			birthDate: '',
			error: '',
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
			history.push('/students');
		}
	};
	render() {
		return (
			<div>
				<form className="loginFormStudent" onSubmit={this.onSubmit}>
					<h2>Enter New Student Information</h2>
					<input
						autoFocus
						className="inputFieldStudent"
						type="text"
						placeholder="First Name"
						onChange={this.firstNameOnChange}
					/>
					<input
						className="inputFieldStudent"
						type="text"
						placeholder="Last Name"
						onChange={this.lastNameOnChange}
					/>
					<input
						className="inputFieldStudent"
						type="text"
						placeholder="Birthdate: MM/DD/YYYY"
						onChange={this.birthDateOnChange}
					/>
					<button className="button" id="buttonStudent">
						Add Student
					</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		startAddStudent: (student) => dispatch(startAddStudent(student)),
	};
};

export default connect(undefined, mapDispatchToProps)(AddStudentPage);
