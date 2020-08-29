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
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		startAddStudent: (student) => dispatch(startAddStudent(student)),
	};
};

export default connect(undefined, mapDispatchToProps)(AddStudentPage);
