const studentsDefaultState = '';
export default (state = studentsDefaultState, action) => {
	switch (action.type) {
		case 'CURRENT_STUDENT':
			return action.student;
		default:
			return state;
	}
};
