export default (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				uid: action.uid,
			};
		case 'LOGOUT':
			return {};
		case 'SET_ADMIN':
			return {
				...state,
				isAdmin: action.isAdmin
			}
		default:
			return state;
	}
};
