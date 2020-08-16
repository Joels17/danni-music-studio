import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header className="header">
		<NavLink to="/" activeClassName="header__is-active" className="header__link" exact={true}>
			<h4>Danni's Music Studio</h4>
		</NavLink>
		<NavLink to="/about" activeClassName="header__is-active" className="header__link">
			<h4>About</h4>
		</NavLink>
		<NavLink to="/admin" activeClassName="header__is-active" className="header__link">
			<h4>Admin</h4>
		</NavLink>
	</header>
);

export default Header;
