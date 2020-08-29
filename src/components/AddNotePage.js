import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { startAddNote } from '../actions/notes';
import { currentStudent } from '../actions/currentStudent'

export class AddNotePage extends React.Component {
	onSubmit = (note) => {
		this.props.startAddNote(note);
		this.props.history.push(`/student/${this.props.currentStudentState.id}`);
	};
	
	render() {
		return (
			<div>
				{this.props.currentStudentState.firstName}
				<NoteForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		startAddNote: (note, student) => dispatch(startAddNote(note, student)),
		currentStudent: (student) => dispatch(currentStudent(student)),
	};
};

const mapStateToProps = (state, props) => {
	return {
		currentStudentState: state.currentStudent,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNotePage);
