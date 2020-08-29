import database from '../firebase/firebase';

export const startSetUserInfo = (email) => {
	return (dispatch, getState) => {
        return database
        .ref(`users/${getState().auth.uid}/info`)
        .set({email});
	}
}