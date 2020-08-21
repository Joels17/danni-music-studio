import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout, isAdmin }) => (
	<header className="header">
		<NavLink
			to="/home"
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
		
		{isAdmin ? (
			<NavLink
			to="/admin"
			activeClassName="header__is-active"
			className="header__link"
		>
			<h4>Admin</h4>
		</NavLink>
		) : (
			''
		)
		}
		
		<button onClick={startLogout}>Logout</button>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout()),
});

const mapStateToProps = (state) => ({
	isAdmin: !!state.auth.isAdmin
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
