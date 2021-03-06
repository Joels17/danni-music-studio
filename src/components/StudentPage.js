import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startAddStudent, startSetStudents } from '../actions/students';
import { currentStudent } from '../actions/currentStudent';
import { history } from '../routers/AppRouter';

export class StudentPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			birthDate: '',
			error: '',
		};
	}

	componentDidMount = () => {
		if (this.props.isAdmin) {
			history.push('/usersAdmin');
		}
	};

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
		history.push('/addStudent');
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
			this.props.startAddStudent({
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				birthDate: this.state.birthDate,
			});
		}
	};

	getData = () => {
		let data = [];
		this.props.students.map((student) => {
			data.push(
				<div key={student.id}>
					<Link onClick={this.onClick} to={`/student/${student.id}`}>
						<div id="studentText">{student.firstName}</div>
					</Link>
					<br />
				</div>
			);
			return data;
		});
		return data;
	};
	render() {
		return (
			<div>
				<div id="studentPageH1">
					<h1>Welcome to Your Student Account</h1>
				</div>

				<div id="studentsWrapper">
					<h2 id="studentPageH2">Student List</h2>
					{this.props.students.length !== 0 ? (
						<div>
							<h4>Click on a student to view their notes</h4>
							<div>{this.getData()}</div>
						</div>
					) : (
						<div>
							<h4>To create a student account click on Add Student below</h4>
						</div>
					)}

					<button className="button" onClick={this.onAddStudentClick}>
						Add Student
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		students: state.students,
		isAdmin: state.auth.isAdmin,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		startAddStudent: (student) => dispatch(startAddStudent(student)),
		currentStudent: (student) => dispatch(currentStudent(student)),
		startSetStudents: () => dispatch(startSetStudents()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);
