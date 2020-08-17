import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
	<header className="header">
		<NavLink
			to="/"
			activeClassName="header__is-active"
			className="header__link"
			exact={true}
		>
			<h4>Danni's Music Studio</h4>
		</NavLink>
		<NavLink
			to="/about"
			activeClassName="header__is-active"
			className="header__link"
		>
			<h4>About</h4>
		</NavLink>
		<NavLink
			to="/admin"
			activeClassName="header__is-active"
			className="header__link"
		>
			<h4>Admin</h4>
		</NavLink>
		<button onClick={startLogout}>Logout</button>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
