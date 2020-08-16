

import { v4 as uuidv4 } from 'uuid';

export const addNote = ({
	noteTitle = '',
	noteBody = '',
	createdAt = 0
}) => ({
	type: 'ADD_NOTE',
	note: {
		id: uuidv4(),
		noteTitle,
		noteBody,
		createdAt
	},
});

export const removeNote = (id) => ({
	type: 'REMOVE_NOTE',
	id,
});

export const editNote = (id, updates) => ({
	type: 'EDIT_NOTE',
	id,
	updates,
});