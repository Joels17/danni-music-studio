import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
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

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<PublicRoute path="/emailLogin" component={EmailLoginPage} />
				<PublicRoute path="/emailSignUp" component={EmailSignUpPage} />
				<PrivateRoute path="/home" component={HomePage} />
				<PrivateRoute path="/about" component={AboutPage} />
				<AdminRoute path="/admin" component={AdminPage} />
				<PrivateRoute path="/addNote" component={AddNotePage} />
				<PrivateRoute path="/edit/:id" component={EditNotePage} />
				<PublicRoute component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
