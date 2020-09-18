import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class UploadSuccessPage extends React.Component {

	render() {
		return (
			<div>
				<div id="studentPageH1">
					<h1>Upload Successful!</h1>
				</div>

				<div id="studentsWrapper">
                    <h2 id="studentPageH2">To view your uploads go back to student page and click on "View Uploads"</h2>
                    <Link to={`/student/${this.props.currentStudent.id}`}>Back to {this.props.currentStudent.firstName}'s page</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentStudent: state.currentStudent,
	};
};


export default connect(mapStateToProps)(UploadSuccessPage);