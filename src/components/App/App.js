import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Question from "../Question/Question";
import Answer from "../Answer/Answer";
import Button from "../Button/Button";

let url = "https://pub-quiz-game.herokuapp.com/history";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			questionObj: {},
			question: "",
			answers: [],
			correctIdx: 0,
		};
	} //constructor

	// deleteEvent = (e) => {
	// 	console.log(e);
	// }; //deleteEvent

	// editEvent = (e) => {
	// 	console.log(e);
	// }; //editEvent

	handleCrudEvent = (e) => {
		console.log(e);
	}; //addEvent

	answerEvent = (e) => {
		console.log(e);
	}; //answerEvent

	//* shuffle a something array and return it
	shuffle = (something) => {
		//* Based on a Fisher-Yates shuffle: https://www.thwcorbin.com/posts/shuffle-card-deck/
		//* numUnshuffled is the number of unshuffled things
		let numUnshuffled = something.length;
		let randomUnshuffledThing;

		//* While unshuffled things remain
		while (numUnshuffled) {
			//* Pick random number betweeen 0 inclusive and number of unshuffled things
			//* Then decrement the number of unshuffled things by 1
			randomUnshuffledThing = Math.floor(Math.random() * numUnshuffled--);
			//* Swap the random thing with the last unshuffled thing in the array
			[something[randomUnshuffledThing], something[numUnshuffled]] = [
				something[numUnshuffled],
				something[randomUnshuffledThing],
			];
		}
		return something;
	}; //shuffle

	getQuestions = () => {
		// * Fetch questions
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				let questions = this.shuffle(data);
				return questions;
			})
			.then((questions) => {
				this.setState({
					questions: questions,
				}); //setState
			});
	}; //getQuestions

	render() {
		//* set this.state.questions to variables to avoid undefined
		// let id;
		let question;
		let answer;
		let answers = [];
		let wrongAnswers = [];

		//* check if questions object is defined
		//* then assign state properties to variables
		if (this.state.questions[0]) {
			// id = this.state.questions[0]._id;
			question = this.state.questions[0].question;
			answer = this.state.questions[0].correct_answer;
			wrongAnswers = this.state.questions[0].incorrect_answers.slice();
			answers = this.shuffle([answer, ...wrongAnswers]);
		}

		//* Check if answers has length
		//* Build list of answers
		let answersList = answers.map((ans, idx) => {
			// if (ans.includes(answer)) {
			// 	return (
			// 		<Answer className="li-answer li-correct" key={idx} answer={ans} />
			// 	);
			// } else {
			// }
			return <Answer className="li-answer" key={idx} answer={ans} />;
		});
		let buttonArr = ["add", "edit", "delete"];
		let buttonList = buttonArr.map((btnName) => {
			return (
				<Button
					btnClass={`li-btn li-btn-` + btnName}
					btnName={btnName.toUpperCase()}
					btnCallback={this.handleCrudEvent}
				/>
			);
		}); //buttonList

		return (
			<div className="App">
				<Header />
				<Question question={question} />
				<ul className="ul-answers">{answersList}</ul>
				<ul className="ul-crud">{buttonList}</ul>
			</div>
		); //return
	} //render

	componentDidMount() {
		this.getQuestions();
	} //componentDidMount
} //App

export default App;

// ASCII codes in question Strings
// &#039; -> '
// &amp; -> & ->  Heckler
// &eacute
// &quot;

// .then((data) => {
// 	let dataFix;
// 	dataFix = data.map((object) => {
// 		let string1, string2, string3;
// 		string1 = object.question.replace(/&#039;/g, "'");
// 		object.question = string1;
// 		string2 = object.question.replace(/&eacute;/g, "e");
// 		object.question = string2;
// 		string3 = object.question.replace(/&quot;/g, '"');
// 		console.log(string3);
// 		return (object.question = string3);
// 	});
// 	return dataFix;
// })
