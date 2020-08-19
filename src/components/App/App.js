import React, { Component } from "react";
import "./App.css";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";
import Question from "../Question/Question";
import Answer from "../Answer/Answer";
import Button from "../Button/Button";

let url = "https://pub-quiz-game.herokuapp.com/history";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeModal: false,
			questions: [],
			questionObj: {},
			question: "",
			answers: [],
			answer: "",
			correctIdx: 0,
			CRUD: null,
		};
	} //constructor

	buildQuestion = (question, correct_answer, incorrect_answers) => {
		let questionObject = {
			incorrect_answers: [...incorrect_answers],
			category: "History",
			type: "multiple",
			difficulty: "hard",
			question: question,
			correct_answer: correct_answer,
		};
		return questionObject;
	};

	deleteQuestion = () => {
		console.log(this.state.questionObj._id);
	};

	editQuestion = (question, answers) => {
		let answers_arr = answers.split(",");
		let incorrect_answers = answers_arr.map((answer) => answer.trim());
		let correct_answer = incorrect_answers.shift();
		let data = this.buildQuestion(question, correct_answer, incorrect_answers);
		console.log(data);

		fetch(`${url}/${this.state.questionObj._id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((questionObj) => {
				console.log(`Successfully edited question:`, questionObj);
				let answer = questionObj.correct_answer;
				let answers = this.shuffle([answer, ...questionObj.incorrect_answers]);
				let questionsUpdate = this.state.questions;
				questionsUpdate.shift();
				questionsUpdate.unshift(questionObj);

				this.setState({
					questions: questionsUpdate,
					questionObj: questionObj,
					question: questionObj.question,
					answer: answer,
					answers: answers,
					correctIdx: answers.indexOf(answer),
					CRUD: null,
				}); //setState
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	addQuestion = (question, answers) => {
		let answers_arr = answers.split(",");
		let incorrect_answers = answers_arr.map((answer) => answer.trim());
		let correct_answer = incorrect_answers.shift();
		let data = this.buildQuestion(question, correct_answer, incorrect_answers);
		console.log(data);

		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((questionObj) => {
				console.log(`Successfully added question:`, questionObj);
				let answer = questionObj.correct_answer;
				let answers = this.shuffle([answer, ...questionObj.incorrect_answers]);
				let questionsUpdate = this.state.questions;
				questionsUpdate.unshift(questionObj);

				this.setState({
					questions: questionsUpdate,
					questionObj: questionObj,
					question: questionObj.question,
					answer: answer,
					answers: answers,
					correctIdx: answers.indexOf(answer),
					CRUD: null,
				}); //setState
			})
			.catch((error) => {
				console.error("Error:", error);
			});

		// * Fetch takes data and returns below
		// {
		// 	"incorrect_answers": [
		// 	  "blue cow",
		// 	  "red cow",
		// 	  "deer"
		// 	],
		// 	"_id": "5f3bc6700806650017b269d6",
		// 	"category": "History",
		// 	"type": "multiple",
		// 	"difficulty": "hard",
		// 	"question": "How now?",
		// 	"correct_answer": "Brown cow",
		// 	"__v": 0
		//   }
	};

	checkCRUD = (crudOrNull, question, answers) => {
		if (crudOrNull === null) {
			this.state.CRUD === "ADD"
				? this.addQuestion(question, answers)
				: this.state.CRUD === "EDIT"
				? this.editQuestion(question, answers)
				: this.state.CRUD === "DELETE"
				? this.deleteQuestion()
				: console.log(crudOrNull);
		} else {
			return;
		}
	};

	// React Docs toggle example: https://reactjs.org/docs/handling-events.html
	toggleModal = (crudOrNull, question, answers) => {
		if (typeof crudOrNull === "object" && crudOrNull !== null) {
			//If user cancelled CRUD operation
			this.setState({
				activeModal: !this.state.activeModal,
				CRUD: null,
			});
		} else {
			this.checkCRUD(crudOrNull, question, answers);
			this.setState({
				activeModal: !this.state.activeModal,
				CRUD: crudOrNull,
			});
		}
	}; //toggleModal()

	nextQuestion = (answersHTMLCollection) => {
		//* reset the li color and background color
		let listOfLi = Array.from(answersHTMLCollection);
		listOfLi.forEach((li) => {
			li.style.backgroundColor = "#c0c0c0";
			li.style.color = "#2958aa";
		});
		//* move current question to the end of the questions array
		let lastQuestion = this.state.questions.shift();
		let questions = this.state.questions;
		questions.push(lastQuestion);
		//* set state with new question object
		let answer = questions[0].correct_answer;
		let answers = this.shuffle([answer, ...questions[0].incorrect_answers]);
		this.setState({
			questions: questions,
			questionObj: questions[0],
			question: questions[0].question,
			answer: answer,
			answers: answers,
			correctIdx: answers.indexOf(answer),
		}); //setState
	};

	handleCrudEvent = (e) => {
		// Check if create, update, or delete
		let CRUD = e.target.textContent;
		this.toggleModal(CRUD);
	}; //handleCrudEvent

	handleAnswerEvent = (e) => {
		let answers = e.target.parentElement.children;
		//* if clicked answer is wrong
		//* turn it red
		if (e.target.textContent !== this.state.answer) {
			e.target.style.backgroundColor = "red";
			e.target.style.color = "white";
		}
		//* turn the correct answer green
		answers[this.state.correctIdx].style.backgroundColor = "green";
		answers[this.state.correctIdx].style.color = "white";

		//* present next question after 3 seconds
		setTimeout(() => {
			this.nextQuestion(answers);
		}, 2000);
	}; //handleAnswerEvent

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
				let answer = questions[0].correct_answer;
				let answers = this.shuffle([answer, ...questions[0].incorrect_answers]);
				this.setState({
					questions: questions,
					questionObj: questions[0],
					question: questions[0].question,
					answer: answer,
					answers: answers,
					correctIdx: answers.indexOf(answer),
				}); //setState
			})
			.catch((error) => {
				console.error("Error:", error);
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
				<Modal
					activeModal={this.state.activeModal}
					modalCallback={this.toggleModal}
					cRUD={this.state.CRUD}
				/>
				<Header />
				<Question question={this.state.question} />
				<ul className="ul-answers">{answersList}</ul>
				<p className="youCrud">
					You can also create, update, or delete questions!
				</p>
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
