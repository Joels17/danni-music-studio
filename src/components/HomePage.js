import React from 'react';

export default class HomePage extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div className="homePage_header">
						<h2 className="homePage__title">Danni's Music Studio</h2>
						<h5 className="homePage__subtitle">
							Join Danni at the Piano Room!
						</h5>
					</div>
					<div className="card">
						<div className="homePage__leftTextBody">
							<h2>More about Danni</h2>
						</div>
						<div className="homePage__textBody">
							<h2 className="homePage__textTitle">About Danni</h2>
							<p className="homePage__text">
								Danni Fehr is a professional piano teacher, audio engineer and
								accompanist at The Piano Room - located in studio #113 at the
								Rotary Centre for the Arts in Kelowna, BC. With over 10 years of
								teaching experience for students age 4-75+, Danni is able to
								cater to students’ specific needs to formulate fun and effective
								learning methods for all levels. Danni holds an ARCT in Piano
								Performance with First Class Honours and certificates in
								Elementary and Intermediate Piano Pedagogy from the Royal
								Conservatory of Music, as well as a diploma in Advanced Music
								Production from the Nimbus School of Recording Arts. She is
								thrilled to offer lessons in many different genres of music with
								focuses on performance, exam preparation, competition
								preparation, composition, arranging, accompaniment, theory,
								recording and basic audio programming.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
