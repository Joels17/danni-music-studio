import database from '../firebase/firebase';

export const addNote = (note) => ({
	type: 'ADD_NOTE',
	note,
});

export const startAddNote = (noteData = {}) => {
	return (dispatch) => {
		const { noteTitle = '', noteBody = '', createdAt = 0 } = noteData;
		const note = { noteTitle, noteBody, createdAt };
		return database
			.ref('notes')
			.push(note)
			.then((ref) => {
				dispatch(
					addNote({
						id: ref.key,
						...note,
					})
				);
			});
	};
};

export const removeNote = (id) => ({
	type: 'REMOVE_NOTE',
	id,
});

export const startRemoveNote = ({ id } = {}) => {
	return (dispatch) => {
		return database
			.ref(`notes/${id}`)
			.remove()
			.then(() => {
				dispatch(removeNote(id));
			});
	};
};

export const editNote = (id, updates) => ({
	type: 'EDIT_NOTE',
	id,
	updates,
});

export const startEditNote = (id, updates) => {
	return (dispatch) => {
		return database
			.ref(`notes/${id}`)
			.update(updates)
			.then(() => {
				dispatch(editNote(id, updates));
			});
	};
};

export const setNotes = (notes) => ({
	type: 'SET_NOTES',
	notes
  });
  
  export const startSetNotes = () => {
	return (dispatch) => {
	  return database.ref('notes').once('value').then((snapshot) => {
		const notes = [];
  
		snapshot.forEach((childSnapshot) => {
		  notes.push({
			id: childSnapshot.key,
			...childSnapshot.val()
		  });
		});
  
		dispatch(setNotes(notes));
	  });
	};
  };
  