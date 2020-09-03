import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { currentStudent } from '../actions/currentStudent';
import { removeAllStudents, startSetStudents } from '../actions/students';
import logout from '../images/logout-64.png';

export class Header extends React.Component {
	onLogoutClick = () => {
		this.props.removeAllStudents();
		this.props.currentStudent('');
		this.props.startLogout();
	};
	componentDidMount = () => {
		this.props.startSetStudents();
	}
	studentAccountLink = () => {
		if(this.props.isAdmin){
			return "/usersAdmin"
		}else if(this.props.isDataAvailable){
			return "/students"
		}else{
			return "/addStudent"
		}
	}
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
					to={this.studentAccountLink()}
					activeClassName="header__is-active"
					className="header__link"
				>
					<h4>Student Accounts</h4>
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

				<button className="button" id="logout" onClick={this.onLogoutClick}>
					<div id="buttonDiv">
						Logout
						<img id="logimg" src={logout} alt="Logout" />
					</div>
				</button>
			</header>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout()),
	currentStudent: (student) => dispatch(currentStudent(student)),
	removeAllStudents: () => dispatch(removeAllStudents()),
	startSetStudents: () => dispatch(startSetStudents())
});

const mapStateToProps = (state) => ({
	isAdmin: !!state.auth.isAdmin,
	isDataAvailable: state.students.length !== 0,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
