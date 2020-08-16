import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { startAddNote } from '../actions/notes';

export class AddNotePage extends React.Component {
    onSubmit = (note) => {
        this.props.startAddNote(note);
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
      startAddNote: (note) => dispatch(startAddNote(note)),
    };
  };
  
  export default connect(undefined, mapDispatchToProps)(AddNotePage);

