import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { currentStudent } from '../actions/currentStudent';
import { removeAllStudents } from '../actions/students';

export class Header extends React.Component {
	onLogoutClick = () => {
		this.props.removeAllStudents();
		this.props.currentStudent('');
		this.props.startLogout();
	};
	render() {
		return (
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
				<NavLink
					to="/students"
					activeClassName="header__is-active"
					className="header__link"
				>
					<h4>Student</h4>
				</NavLink>

				{this.props.isAdmin ? (
					<NavLink
						to="/admin"
						activeClassName="header__is-active"
						className="header__link"
					>
						<h4>Admin</h4>
					</NavLink>
				) : (
					''
				)}

				<button className="button" onClick={this.onLogoutClick}>
					Logout
				</button>
			</header>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout()),
	currentStudent: (student) => dispatch(currentStudent(student)),
	removeAllStudents: () => dispatch(removeAllStudents()),
});

const mapStateToProps = (state) => ({
	isAdmin: !!state.auth.isAdmin,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
