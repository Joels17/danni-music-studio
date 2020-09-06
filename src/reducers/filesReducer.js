const filesReducerDefaultState = [];
export default (state = filesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_FILE':
			return [...state, action.file];
		case 'SET_FILES':
			return action.files;
		default:
			return state;
	}
};
