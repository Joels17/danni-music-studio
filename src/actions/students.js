import database from '../firebase/firebase';

export const addStudent = (student) => ({
	type: 'ADD_STUDENT',
	student,
});

export const startAddStudent = (studentData = {}, student) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const { firstName = '', lastName = '', birthDate = 0 } = studentData;
		const student = { firstName, lastName, birthDate };
		return database
			.ref(`users/${uid}/students`)
			.push(student)
			.then((ref) => {
				dispatch(
					addStudent({
						id: ref.key,
						...student,
					})
				);
			});
	};
};

export const removeAllStudents = () => ({
	type: 'REMOVE_ALL_STUDENTS',
});

export const setStudents = (students) => ({
	type: 'SET_STUDENTS',
	students,
});

export const startSetStudents = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;

		return database
			.ref(`users/${uid}/students`)
			.once('value')
			.then((snapshot) => {
				const students = [];

				snapshot.forEach((childSnapshot) => {
					students.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					});
				});

				dispatch(setStudents(students));
			});
	};
};

export const setStudentsAdmin = (students) => ({
	type: 'SET_STUDENTS_ADMIN',
	students,
});

export const startSetStudentsAdmin = (id) => {
	return (dispatch, getState) => {
		let uid = getState().auth.uid;
		if (id) {
			uid = id;
		}
		return database
			.ref(`users/${uid}/students`)
			.once('value')
			.then((snapshot) => {
				const students = [];

				snapshot.forEach((childSnapshot) => {
					students.push({
						id: childSnapshot.key,
						...childSnapshot.val(),
					});
				});

			
				dispatch(setStudentsAdmin(students));
			});
	};
};
