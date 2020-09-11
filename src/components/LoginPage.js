import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import mouseicon from '../images/mouse-icon.png';
import dannipic from '../images/dannipic.jpeg';

export const LoginPage = () => (
	<div className="LoginPage__head">
		<div id="Banner">
			<div id="buttons">
				<Link to="/emailLogin">
					<button className="button">Student Login</button>
				</Link>
			</div>
		</div>

		<div id="Black-section">
			<h2>Danni's Music Studio</h2>
			<img src={mouseicon} alt="scroll"></img>
		</div>

		<div className="row">
			<div className="column">
				<h3>Lessons</h3>
				Private Piano and Theory Lessons are offered to students of all ages
				from beginner to advanced. Lessons are curated and catered to each
				student with focuses on performance, exam preparation (RCM),
				composition, arranging, accompaniment, theory, recording and basic audio
				programming. Private weekly lessons are offered on Wednesdays and
				Thursdays. *Currently there are no spots available - contact Danni to
				join the waitlist*
			</div>
			<div className="column">
				<h3>Group Classes</h3>
				Small group lessons for Level 5 RCM theory and CVMT Level 1 will be
				offered to groups of 3-6. Group theory classes are offered on Saturdays.
				See below for details.
			</div>
			<div className="column">
				<h3>Accompaniment</h3>
				Danni is a flexible and collaborative pianist with over 10 years of
				accompaniment experience for performances, exams and competitions. Danni
				offers accompaniment for all genres of vocalists and instrumentalists
				with specialization in contemporary and popular music.
			</div>
		</div>

		<div className="row" id="aboutWrapper">

				<div className="column" id="aboutColText">
					<h3>About Danni</h3>
					<p>
						Danni Fehr is a professional piano teacher, audio engineer and
						accompanist.
					</p>{' '}
					<p>
						{' '}
						With over 10 years of teaching experience for students age 4-75+,
						Danni is able to cater to students’ specific needs to formulate fun
						and effective learning methods for all levels. Danni holds an ARCT
						in Piano Performance with First Class Honours and certificates in
						Elementary and Intermediate Piano Pedagogy from the Royal
						Conservatory of Music, as well as a diploma in Advanced Music
						Production from the Nimbus School of Recording Arts. 
					</p>
				</div>
				<div className="column" id="aboutCol">
					<img width={200} src={dannipic} alt="danni"></img>
				</div>
			
		</div>

		<div className="row" id="testi">
			<div className="column" id="testiCol">
				“We are so grateful for the amazing piano player Danni has helped our
				son become. She knows how to teach to his strengths as well as make the
				more difficult parts fun and easy for him to understand. He finds her
				strategies so helpful. Her incredible knowledge and expertise as a piano
				player is an inspiration to him. She teaches him the technique he needs
				to learn as well as balancing it with discussions on all genres of
				music. They have a strong bond and Markkus looks forward to every
				lesson. We are so thrilled that he will soon be ready for his Grade 8
				Royal Conservatory exam. Thank you for everything over the years,
				Danni!” - Monique
			</div>
			<div className="column" id="testiCol">
				“Our family has had the privilege of having Danni as our piano teacher
				for the last two years. Her big welcoming smile greets you every time
				you enter her door for a fun productive lesson. Danni takes her time to
				get know what our learning styles are, she teaches and challenges us in
				warm, kind, fun and inspiring approach. We are very lucky to be your
				students!” - Michelle, Kai and Brady
			</div>
		</div>

		<div className="row" id="groupT">
			<div className="column" id="groupTCol">
				<h3>Level 5 Group Theory</h3>
				<p>
					For students who are planning to write the level 5 RCM theory exam -
					an intensive 13 week program to cover all chapters of the RCM level 5
					theory work book and terms list. 12 weeks will be used to work through
					the chapters and the final week will be used for review and final exam
					preparation.
				</p>{' '}
				<p>
					• Includes weekly group classes, workbooks, homework corrections,
					online resources and practice exams
				</p>{' '}
				<p>• Class size: 3-6 students</p>
				<p>• Schedule: Saturdays 10-11 am</p>{' '}
				<p>
					• First seating: September 12-December 5th (13 week program) (Exam
					dates: December 11th and 12th, 2020) <strong>*FULL*</strong>
				</p>{' '}
				<p>
					• Second seating: January 30th-May 8th (13 week program with 2 weeks
					off at spring break) (Exam dates: May 14th and 15th, 2021)
				</p>
			</div>
			<div className="column">
				<h3>CVMT (Contemporary and Vocal Music Theory) Level 1 </h3>
				<p>
					CVMT is a program created and established by Danni to introduce theory
					to contemporary instrumental and vocal students with zero theory
					experience. It is a program recommended for students who are
					interested in sight reading, performance, composition, arranging and
					collaborating with others.
				</p>{' '}
				<p>
					• Topics include notation, intro to major and minor keys, scales,
					intervals, intro to rhythm, transposition, basic chording/harmony,
					common musical terms and more!
				</p>{' '}
				<p>
					• Cost includes weekly group classes, customized work sheets, learning
					materials, homework corrections, online resources, a final test and
					completion certificate
				</p>{' '}
				<p>• Class size: 3-6 students</p>{' '}
				<p>• Schedule: Saturdays 11 am -12 pm or 12 pm - 1 pm</p>{' '}
				<p>• First seating: September 26th-November 28th (10 week program)</p>{' '}
				<p>• Second seating: January 9th-March 13th (10 week program)</p>
			</div>
		</div>

		<div className="row" id="getInTouch">
			<h4>Get in touch!</h4>
			<p>
				Location: “The Piano Room” - Studio #113 at The Rotary Centre for the
				Arts
			</p>
			<p>421 Cawston Ave, Kelowna BC, V1Y6Z1</p>
			<p>Email: dannifehr@yahoo.ca</p> <p>Phone: 250-570-2277</p>
			<br></br>
			<p>Website created by Joel Semeniuk: joel.semeniuk@gmail.com</p>
		</div>
	</div>
);

export default connect(undefined)(LoginPage);
