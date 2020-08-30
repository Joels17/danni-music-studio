import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NotesListFilter from './NotesListFilters';
import NotesList from './NotesList';
import { currentStudent } from '../actions/currentStudent';
import { startSetNotes } from '../actions/notes';
import { startRemoveStudent } from '../actions/students';
import { history } from '../routers/AppRouter';

export class StudentProfilePage extends React.Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			hasFetched: false,
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
		this.props.startRemoveStudent();
		history.push('/home');
	};

	render() {
		return (
			<div>
				{this.props.currentStudentState.firstName}{' '}
				{this.props.currentStudentState.lastName}
				<button className="button" onClick={this.onRemoveStudent}>
					Remove student
				</button>
				{this.props.isAdmin ? (
					<div>
						<Link
							to={`/addNote/${this.props.currentStudentState.id}`}
							className="button_text"
						>
							<button className="button">Add Note</button>
						</Link>
					</div>
				) : (
					''
				)}
				<NotesListFilter />
				{this.state.hasFetched ? (
					<NotesList />
				) : (
					<div>
						<p>Fetching notes...</p>
					</div>
				)}
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
