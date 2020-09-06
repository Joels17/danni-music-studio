import database, { storage } from '../firebase/firebase';

export const addFile = (file) => ({
	type: 'ADD_FILE',
	file,
});

export const startAddFile = (file) => {
	return (dispatch, getState) => {
		return database
			.ref(`users/${getState().auth.uid}/students/${getState().currentStudent.id}/files`)
			.push(file)
			.then((ref) => {
				dispatch(
					addFile({
                        ...file
					})
				);
			});
	};
};

export const setFiles = (files) => ({
	type: 'SET_FILES',
	files,
});

export const startSetFiles = () => {
	return (dispatch, getState) => {
		let uid = undefined;
		if(getState().currentUser.id){
			uid = getState().currentUser.id;
		}else {
			uid = getState().auth.uid;
		}
		
		const sid = getState().currentStudent.id;
		return database
			.ref(`users/${uid}/students/${sid}/files`)
			.once('value')
			.then((snapshot) => {
				const files = [];

				snapshot.forEach((childSnapshot) => {
					files.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					});
				});

				dispatch(setFiles(files));
			});
	};
};
