import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { startAddNote } from '../actions/notes';
import { currentStudent } from '../actions/currentStudent'

export class AddNotePage extends React.Component {
	onSubmit = (note) => {
		this.props.startAddNote(note, this.props.student);
		this.props.history.push(`/student/${this.props.student.id}`);
	};
	componentWillMount() {
		this.props.currentStudent('');
	}
	render() {
		return (
			<div>
				{this.props.student.firstName}
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
		student: state.students.find(
			(student) => student.id === props.match.params.id
		),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNotePage);
