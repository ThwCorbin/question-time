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
			answer: "",
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

	handleAnswerEvent = (e) => {
		//* if clicked answer is wrong
		//* turn it red
		if (e.target.textContent !== this.state.answer) {
			console.log(`${e.target.textContent} is red/not correct`);
		}
		//* turn the correct answer green
		console.log(`${this.state.answer} is green/correct`);
	}; //answerEvent

	changeState = (answers, correctIdx) => {
		this.setState({
			answers: answers,
			correctIdx: correctIdx,
		});
	};

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
					questionObj: questions[0],
					question: questions[0].question,
					answer: questions[0].correct_answer,
					answers: [
						questions[0].correct_answer,
						...questions[0].incorrect_answers,
					],
					correctIdx: 0,
				}); //setState
			});
	}; //getQuestions

	render() {
		//* check if answers array is defined
		//* then build list of answers
		let answersList;
		if (this.state.answers) {
			let answersArr = this.state.answers;
			answersList = answersArr.map((answer, idx) => {
				return (
					<Answer
						className="li-answer"
						answer={answer}
						btnCallback={this.handleAnswerEvent}
						key={idx}
					/>
				);
			}); //answerList
		}

		//* build list buttons
		let buttonArr = ["add", "edit", "delete"];
		let buttonList = buttonArr.map((btnName, idx) => {
			return (
				<Button
					btnClass={`li-btn li-btn-` + btnName}
					btnName={btnName.toUpperCase()}
					btnCallback={this.handleCrudEvent}
					key={idx}
				/>
			);
		}); //buttonList

		return (
			<div className="App">
				<Header />
				<Question question={this.state.question} />
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
