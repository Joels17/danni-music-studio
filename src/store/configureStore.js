import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import notesReducer from '../reducers/notesReducer';
import filtersReducer from '../reducers/filtersReducer';
import authReducer from '../reducers/authReducer';
import studentsReducer from '../reducers/studentsReducer';
import currentStudentReducer from '../reducers/currentStudentReducer';
import currentUserReducer from '../reducers/currentUserReducer';
import usersReducer from '../reducers/usersReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			notes: notesReducer,
			filters: filtersReducer,
			auth: authReducer,
			students: studentsReducer,
			currentStudent: currentStudentReducer,
			users: usersReducer,
			currentUser: currentUserReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
};
