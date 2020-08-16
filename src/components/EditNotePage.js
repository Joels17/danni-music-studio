import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { editNote, removeNote } from '../actions/notes';

export class EditNotePage extends React.Component {
  onSubmit = (note) => {
    this.props.editNote(this.props.note.id, note);
    this.props.history.push('/admin');
  };
  onClick = () => {
    this.props.removeExpense(this.props.note.id);
    this.props.history.push('/admin');
  };

  render() {
    return (
      <div>
        <NoteForm note={this.props.note} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    note: state.notes.find(
      (note) => note.id === props.match.params.id
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editNote: (id, note) => dispatch(editNote(id, note)),
    removeExpense: (note) => dispatch(removeNote(note)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNotePage);
