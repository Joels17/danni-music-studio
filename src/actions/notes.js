import database from '../firebase/firebase';

export const addNote = (note) => ({
	type: 'ADD_NOTE',
	note,
});

export const startAddNote = (noteData = {}, student) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const { noteTitle = '', noteBody = '', createdAt = 0 } = noteData;
		const note = { noteTitle, noteBody, createdAt };
		return database
			.ref(`users/${uid}/students/${student.id}/notes`)
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
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const sid = getState().currentStudent.id;
		return database
			.ref(`users/${uid}/students/${sid}/notes/${id}`)
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
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const sid = getState().currentStudent.id;
		return database
			.ref(`users/${uid}/students/${sid}/notes/${id}`)
			.update(updates)
			.then(() => {
				dispatch(editNote(id, updates));
			});
	};
};

export const setNotes = (notes) => ({
	type: 'SET_NOTES',
	notes,
});

export const startSetNotes = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const sid = getState().currentStudent.id;
		return database
			.ref(`users/${uid}/students/${sid}/notes`)
			.once('value')
			.then((snapshot) => {
				const notes = [];

				snapshot.forEach((childSnapshot) => {
					notes.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					});
				});

				dispatch(setNotes(notes));
			});
	};
};
