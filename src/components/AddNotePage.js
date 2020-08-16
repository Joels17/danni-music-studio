import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { addNote } from '../actions/notes';

export class AddNotePage extends React.Component {
    onSubmit = (note) => {
        this.props.addNote(note);
        this.props.history.push('/admin');
      };

	render() {
        return <div>
            <NoteForm onSubmit={this.onSubmit}/>
        </div>;
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
      addNote: (note) => dispatch(addNote(note)),
    };
  };
  
  export default connect(undefined, mapDispatchToProps)(AddNotePage);

