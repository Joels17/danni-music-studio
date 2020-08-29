const studentsDefaultState = '';
export default (state = studentsDefaultState, action) => {
	switch (action.type) {
		case 'CURRENT_STUDENT':
			if(action.student === undefined){
				return state;
			}
			return action.student;
		default:
			return state;
	}
};
