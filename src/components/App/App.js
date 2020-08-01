import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Question from "../Question/Question";
import Answer from "../Answer/Answer";

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

	answerEvent = (e) => {
		// code
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
		let id;
		let question;
		let answer;
		let answers = [];
		let wrongAnswers = [];

		//* check if questions object is defined
		//* then assign state properties to variables
		if (this.state.questions[0]) {
			id = this.state.questions[0]._id;
			question = this.state.questions[0].question;
			answer = this.state.questions[0].correct_answer;
			wrongAnswers = this.state.questions[0].incorrect_answers.slice();
			answers = this.shuffle([answer, ...wrongAnswers]);
		}

		//* Check if answers has length
		//* Build list of answers
		let answersList = answers.map((ans) => {
			if (ans === answer) {
			} else {
			}
			return <Answer className="li-answer" answer={ans} />;
		});

		return (
			<div className="App">
				<Header />
				<Question question={question} />
				<ul className="ul-answers">{answersList}</ul>
				{/* <Button btnAnswer={this.answerEvent} /> */}
			</div>
		);
	} //render

	componentDidMount() {
		this.getQuestions();
	} //componentDidMount
} //App

export default App;

// ASCII codes in question Strings
// &#039; -> '
