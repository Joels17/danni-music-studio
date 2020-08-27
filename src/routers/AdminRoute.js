import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const AdminRoute = ({
	isAdmin,
	component: Component,
	isDataAvailable,
	...rest
}) => (
	<div>
		<Route
			{...rest}
			component={(props) =>
				isAdmin && isDataAvailable? (
					<div>
						<Header />
						<Component {...props} />
					</div>
				) : (
					<Redirect to="/home" />
				)
			}
		/>
	</div>
);

const mapStateToProps = (state) => ({
	isDataAvailable: state.students.length !== 0,
	isAdmin: !!state.auth.isAdmin,
});

export default connect(mapStateToProps)(AdminRoute);
