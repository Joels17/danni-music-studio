const studentsDefaultState = [];
export default (state = studentsDefaultState, action) => {
	switch (action.type) {
		case 'ADD_STUDENT':
			return [...state, action.student];
		case 'SET_STUDENTS':
			return action.students;
		case 'REMOVE_STUDENT':
			return state.filter(({ id }) => {
				return id !== action.sid;
			});
		case 'SET_STUDENTS_ADMIN':
			return [...state, action.students];
		case 'REMOVE_ALL_STUDENTS':
			return studentsDefaultState;
		default:
			return state;
	}
};
