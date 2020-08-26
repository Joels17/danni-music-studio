import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

const RefreshRoute = ({ component: Component, isDataAvailable, isAuthenticated, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isDataAvailable && isAuthenticated ? (
				<div>
					<Header />
					<Component {...props} />
				</div>
			) : (
				<Redirect
					to={{
						pathname: '/loading',
					}}
				/>
			)
		}
	/>
);

const mapStateToProps = (state) => ({
    isDataAvailable: state.students.length !== 0,
    isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(RefreshRoute);
