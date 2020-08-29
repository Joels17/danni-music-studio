const userDefaultState = '';
export default (state = userDefaultState, action) => {
	switch (action.type) {
		case 'CURRENT_USER':
			return action.user;
		default:
			return state;
	}
};
