import React from 'react';
import { connect } from 'react-redux';
import { startSignUpEmail } from '../actions/auth';

export class EmailSignUpPage extends React.Component {
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
			this.props.startSignUpEmail(this.state.email, this.state.password).catch((err) => {
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

					<button>Create Account</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		startSignUpEmail: (email, password) =>
			dispatch(startSignUpEmail(email, password)),
	};
};

export default connect(undefined, mapDispatchToProps)(EmailSignUpPage);
