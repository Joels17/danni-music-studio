import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import pic from '../images/piano.png';

export const LoginPage = ({ startLogin }) => (
	<div>
		<div className="LoginPage__head">
		<img src={pic} width="200"/>
			<h2>Danni's Music Studio</h2>
			<h5>Email: dannifehr@yahoo.ca</h5>
			<h5>Phone: 250-570-2277</h5>
		</div>
		
		<Link to="/emailLogin">
			<button className="button">Login with Email</button>
		</Link>
		
		<button className="button" onClick={startLogin}>
			Login with Google
		</button>
		
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
