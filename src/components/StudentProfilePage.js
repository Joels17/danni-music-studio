import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NotesListFilter from './NotesListFilters';
import NotesList from './NotesList';
import { currentStudent } from '../actions/currentStudent';
import { startSetNotes } from '../actions/notes';

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
				console.log(this.props.currentStudentState);
				this.setState({ hasFetched: true });
			}
		});
	};

	componentWillUnmount = () => {
		this._isMounted = false;
	};

	render() {
		return (
			<div>
				{this.props.currentStudentState.firstName}{' '}
				{this.props.currentStudentState.lastName}
				{this.props.isAdmin ? (
					<Link
						to={`/addNote/${this.props.currentStudentState.id}`}
						className="button_text"
					>
						<button className="button">Add Note</button>
					</Link>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfilePage);
