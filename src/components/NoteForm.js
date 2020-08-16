import React from 'react';
import moment from 'moment';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

export default class NoteForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			noteTitle: props.note ? props.note.noteTitle : '',
			noteBody: props.note ? props.note.noteBody : '',
			createdAt: props.note ? moment(props.note.createdAt) : moment(),
			error: '',
		};
	}

	onNoteTitleChange = (e) => {
		const noteTitle = e.target.value;
		this.setState(() => ({ noteTitle }));
	};
	onNoteBodyChange = (content) => {
		const noteBody = content;
		this.setState(() => ({ noteBody }));
	};

	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.noteTitle || !this.state.noteBody) {
			this.setState(() => ({
				error: 'Please provide note title and note body',
			}));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				noteTitle: this.state.noteTitle,
				noteBody: this.state.noteBody,
				createdAt: this.state.createdAt.valueOf(),
			});
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <h4>{this.state.error}</h4>}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Note Title"
						autoFocus
						value={this.state.noteTitle}
						onChange={this.onNoteTitleChange}
					/>
					<SunEditor setContents={this.state.noteBody} onChange={this.onNoteBodyChange} setOptions={{
						buttonList : buttonList.complex,
						height : 500,
						width: 800
					
					}}/>
					<button>{this.props.note ? 'Update Note' : 'Add Note'}</button>
				</form>
			</div>
		);
	}
}
