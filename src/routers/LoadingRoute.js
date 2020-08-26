import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const LoadingRoute = ({
	isAuthenticated,
	component: Component,
	...rest
}) => (
	<div>
		<Route
			{...rest}
			component={(props) =>
				isAuthenticated ? (
					<div>
						<Component {...props} />
					</div>
				) : (
					<Redirect to="/" />
				)
			}
		/>
	</div>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(LoadingRoute);