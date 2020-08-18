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
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
    <div>
			<Switch>
				<Route path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/home" component={HomePage} />
				<PrivateRoute path="/about" component={AboutPage} />
				<PrivateRoute path="/admin" component={AdminPage} />
				<PrivateRoute path="/addNote" component={AddNotePage} />
				<PrivateRoute path="/edit/:id" component={EditNotePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
