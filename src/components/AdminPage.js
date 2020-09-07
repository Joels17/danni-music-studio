import React from 'react';
import { functions } from '../firebase/firebase';

export default class AdminPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			error: ''
		};
	}

	onAddAdminChange = (e) => {
		this.setState({ value: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		if(!this.state.value){
			this.setState({error: 'Please Provide an admin'});
		}else{
			this.setState({error: ''});
			const addAdminRole = functions.httpsCallable('addAdminRole');
			addAdminRole({ email: this.state.value }).then((result) => {
				console.log(result);
			});
		}
		
	};

	render() {
		return (
			<div>
				{this.state.error ? <h3>{this.state.error}</h3>:''}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Add admin here"
						onChange={this.onAddAdminChange}
					/>

					<button className="button">Add admin</button>
				</form>
			</div>
		);
	}
}
