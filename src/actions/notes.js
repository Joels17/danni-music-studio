import database from '../firebase/firebase';

export const addNote = (note) => ({
	type: 'ADD_NOTE',
	note,
});

export const startAddNote = (noteData = {}) => {
	return (dispatch, getState) => {
		const { noteTitle = '', noteBody = '', createdAt = 0 } = noteData;
		const note = { noteTitle, noteBody, createdAt };
		return database
			.ref(`users/${getState().currentUser.id}/students/${getState().currentStudent.id}/notes`)
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
		const uid = getState().currentUser.id;
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
		const uid = getState().currentUser.id;
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
		let uid = undefined;
		if(getState().currentUser.id){
			uid = getState().currentUser.id;
		}else {
			uid = getState().auth.uid;
		}
		
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
