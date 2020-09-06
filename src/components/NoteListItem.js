import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

export class NoteListItem extends React.Component {
	render() {
		return (
			<div className="noteListItem">
				{this.props.isAdmin? (
				<Link to={`/edit/${this.props.id}`}>
					<h3>{this.props.noteTitle}</h3>
				</Link>
				) : (
					<h3>{this.props.noteTitle}</h3>
				)}
				
				<div suppressContentEditableWarning={true}>
					{ReactHtmlParser(this.props.noteBody)} ---
					{moment(this.props.createdAt).format('MMMM Do, YYYY')}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAdmin: !!state.auth.isAdmin
	}
}

export default connect(mapStateToProps)(NoteListItem);
