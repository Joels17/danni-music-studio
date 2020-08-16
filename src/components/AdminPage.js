import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NotesListFilter from './NotesListFilters';
import NotesList from './NotesList';

export default class AdminPage extends React.Component {
	render() {
		return (
			<div>
				<Link to="/addNote" className="button_text">
					<Button variant="contained" color="secondary">Add Note</Button>
				</Link>

				<NotesListFilter />
				<NotesList />
			</div>
		);
	}
}
