import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
	type: 'LOGIN',
	uid,
});

export const startLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAuthProvider);
	};
};

export const logout = () => ({
	type: 'LOGOUT',
});

export const startLogout = () => {
	return () => {
		return firebase.auth().signOut();
	};
};

export const startSignUpEmail = (email, password) => {
	return () => {
		return firebase.auth().createUserWithEmailAndPassword(email, password)
	};
};

export const startLoginEmail = (email, password) => {
	return () => {
		return firebase.auth().signInWithEmailAndPassword(email, password)
	};
};

export const startSetAdmin = (user) => {
	return (dispatch) => {
		user.getIdTokenResult().then((getIdTokenResult) => {
			dispatch(setAdmin(getIdTokenResult.claims.admin));
		});
	};
};

export const setAdmin = (isAdmin) => ({
	type: 'SET_ADMIN',
	isAdmin,
});
