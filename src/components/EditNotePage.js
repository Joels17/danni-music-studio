import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { startEditNote, startRemoveNote } from '../actions/notes';

export class EditNotePage extends React.Component {
  onSubmit = (note) => {
    this.props.startEditNote(this.props.note.id, note);
    this.props.history.push('/admin');
  };
  onClick = () => {
    this.props.startRemoveNote(this.props.note);
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
    startEditNote: (id, note) => dispatch(startEditNote(id, note)),
    startRemoveNote: (note) => dispatch(startRemoveNote(note)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditNotePage);
