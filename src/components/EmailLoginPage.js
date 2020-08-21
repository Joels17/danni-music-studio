import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmail } from '../actions/auth';

export class EmailLoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			error: '',
		};
	}

	onEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};

	onPasswordChange = (e) => {
		this.setState({ password: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (!this.state.email || !this.state.password) {
			this.setState({ error: 'Please input email and password' });
		} else {
			this.setState({ error: '' });
			this.props.startLoginEmail(this.state.email, this.state.password).catch((err) => {
				this.setState({error: err.message})
			});;
		}
	};

	render() {
		return (
			<div>
				{this.state.error ? <h3>{this.state.error}</h3>:''}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Email"
						onChange={this.onEmailChange}
					/>

					<input
						type="password"
						placeholder="password"
						onChange={this.onPasswordChange}
					/>

					<button>Login</button>
				</form>
				<Link to="/emailSignUp"><button>Create an Account</button></Link>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		startLoginEmail: (email, password) =>
			dispatch(startLoginEmail(email, password)),
	};
};

export default connect(undefined, mapDispatchToProps)(EmailLoginPage);
