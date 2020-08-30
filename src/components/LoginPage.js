import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div className="LoginPage__head">
		<div id="Banner">
			<div id="buttons">
				<Link to="/emailLogin">
					<button className="button">Login with Email</button>
				</Link>

				<button className="button" onClick={startLogin}>
					Login with Google
				</button>
			</div>
		</div>
		<div id="Black-section">
			<h2>Danni's Music Studio</h2>
		</div>

		<div className="row">
			<div className="column"><h4>Lessons</h4>Private Piano and Theory Lessons are offered to students of all ages
			from beginner to advanced. Lessons are curated and catered to each
			student with focuses on performance, exam preparation (RCM),
			composition, arranging, accompaniment, theory, recording and basic audio
			programming.</div>
			<div className="column"><h4>Group Lessons</h4>Danni will be offering group lessons for level 5 RCM theory and her new
			contemporary curriculum: CVMT Level 1.</div>
			<div className="column"><h4>Accompaniment</h4>Danni is a flexible and collaborative pianist with over 10 years of
			accompaniment experience for performances, exams and competitions. Danni
			offers accompaniment for all genres of vocalists and instrumentalists
			with specialization in contemporary and popular music.</div>
			
		</div>

		<div className="aboutWrapper">
			<div id="about">
				<h3>About Danni</h3>
				Danni Fehr is a professional piano teacher, audio engineer and
				accompanist at The Piano Room - located in studio #113 at the Rotary
				Centre for the Arts in Kelowna, BC. With over 10 years of teaching
				experience for students age 4-75+, Danni is able to cater to students’
				specific needs to formulate fun and effective learning methods for all
				levels. Danni holds an ARCT in Piano Performance with First Class
				Honours and certificates in Elementary and Intermediate Piano Pedagogy
				from the Royal Conservatory of Music, as well as a diploma in Advanced
				Music Production from the Nimbus School of Recording Arts. She is
				thrilled to offer lessons in many different genres of music with focuses
				on performance, exam preparation, competition preparation, composition,
				arranging, accompaniment, theory, recording and basic audio programming.
			</div>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
