import database from '../firebase/firebase';

export const getUsersAdmin = (users) => ({
	type: 'GET_USERS',
	users,
});

export const startGetUsersAdmin = () => {
	return (dispatch, getState) => {

		return database
		.ref(`users`)
		.once('value')
		.then((snapshot) => {
			let users = [];

			snapshot.forEach((childSnapshot) => {
				users.push({
					id: childSnapshot.key,
					...childSnapshot.val(),
				});
			});
			dispatch(getUsersAdmin(users));
		});
	}
}
