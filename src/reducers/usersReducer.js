const usersDefaultState = [];
export default (state = usersDefaultState, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return action.users;
		default:
			return state;
	}
};
