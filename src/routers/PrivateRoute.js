import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
	isAuthenticated,
	isAdmin,
	component: Component,
	...rest
}) => (
	<div>
		<Route
			{...rest}
			component={(props) =>
				isAuthenticated ? (
					isAdmin ? (
						<Redirect to="/usersAdmin" />
					) : (
						<div>
							<Header />
							<Component {...props} />
						</div>
					)
				) : (
					<Redirect to="/" />
				)
			}
		/>
	</div>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid,
	isAdmin: state.auth.isAdmin,
});

export default connect(mapStateToProps)(PrivateRoute);
