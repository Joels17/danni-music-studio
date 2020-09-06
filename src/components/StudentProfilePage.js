import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NotesListFilter from './NotesListFilters';
import NotesList from './NotesList';
import { currentStudent } from '../actions/currentStudent';
import { startSetNotes } from '../actions/notes';
import { history } from '../routers/AppRouter';
import { startRemoveStudent } from '../actions/students';

export class StudentProfilePage extends React.Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			hasFetched: false,
			shouldRemove: false,
		};
	}

	componentDidMount = () => {
		this._isMounted = true;

		this.props.currentStudent(this.props.student);

		this.props.startSetNotes().then(() => {
			if (this._isMounted) {
				this.setState({ hasFetched: true });
				if (!this.props.currentStudentState) {
					history.push('/home');
				}
			}
		});
	};

	componentWillUnmount = () => {
		this._isMounted = false;
	};

	onRemoveStudent = () => {
		this.setState({ shouldRemove: !this.state.shouldRemove });
	};

	onRemoveStudentForGood = () => {
		this.props.startRemoveStudent();
		history.push('/loading');
	};

	render() {
		return (
			<div id="studentProfileWrapper">
				<div id="studentInfo">
					<div id="studentProfileName">
						{this.props.currentStudentState.firstName}{' '}
						{this.props.currentStudentState.lastName}
					</div>
					<div>
						<h5 id="profileTips">
							To download an image right click and save image
						</h5>
					</div>

					{this.props.isAdmin ? (
						<div id="studentProfileButtons">
							<Link
								to={`/addNote/${this.props.currentStudentState.id}`}
								className="button_text"
							>
								<button className="button">Add Note</button>
							</Link>
							<button className="button" onClick={this.onRemoveStudent}>
								Remove student
							</button>
							{this.state.shouldRemove ? (
								<div>
									<h3>This will delete the student, and all of their notes</h3>
									<button
										className="button"
										onClick={this.onRemoveStudentForGood}
									>
										DELETE STUDENT
									</button>
								</div>
							) : (
								''
							)}
						</div>
					) : (
						''
					)}
				</div>
				<div id="noteInfo">
					<h3>
						<u>Note Search</u>
					</h3>
					<NotesListFilter />
					<h3 id="noteInfoH3">
						<u>Lesson Notes</u>
					</h3>
					{this.state.hasFetched ? (
						<div>
							<NotesList />
						</div>
					) : (
						<div>
							<p>Fetching notes...</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		student: state.students.find(
			(student) => student.id === props.match.params.id
		),
		currentStudentState: state.currentStudent,
		isAdmin: !!state.auth.isAdmin,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		currentStudent: (student) => dispatch(currentStudent(student)),
		startSetNotes: () => dispatch(startSetNotes()),
		startRemoveStudent: () => dispatch(startRemoveStudent()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfilePage);
