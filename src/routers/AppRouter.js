import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/NotFoundPage';
import AdminPage from '../components/AdminPage';
import AddNotePage from '../components/AddNotePage';
import EditNotePage from '../components/EditNotePage';
import LoginPage from '../components/LoginPage';
import EmailLoginPage from '../components/EmailLoginPage';
import EmailSignUpPage from '../components/EmailSignUpPage';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import PublicRoute from './PublicRoute';
import StudentPage from '../components/StudentPage';
import StudentProfilePage from '../components/StudentProfilePage';
import LoadingPage from '../components/LoadingPage';
import LoadingRoute from './LoadingRoute';
import AdminStudents from '../components/AdminStudents';
import AddStudentPage from '../components/AddStudentPage';
import UsersPage from '../components/UsersPage';
import UploadSuccessPage from '../components/UploadSuccess';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<PublicRoute path="/emailLogin" component={EmailLoginPage} />
				<PublicRoute path="/emailSignUp" component={EmailSignUpPage} />
				<LoadingRoute path="/loading" component={LoadingPage} />
				<PrivateRoute path="/students" component={StudentPage} />
				<PrivateRoute path="/uploadSuccess" component={UploadSuccessPage} />
				<PrivateRoute path="/addStudent" component={AddStudentPage} />
				<AdminRoute path="/studentsAdmin/:id" component={AdminStudents} />
				<AdminRoute path="/usersAdmin" component={UsersPage} />
				<AdminRoute path="/admin" component={AdminPage} />
				<AdminRoute path="/addNote/:id" component={AddNotePage} />
				<AdminRoute path="/edit/:id" component={EditNotePage} />
				<PrivateRoute path="/student/:id" component={StudentProfilePage} />
				<PublicRoute component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
