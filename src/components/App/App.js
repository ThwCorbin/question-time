import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";

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

	getQuestions = () => {
		// * Fetch questions
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({
					questions: data,
				}); //setState
			});
	}; //getQuestions

	answerEvent = (e) => {
		// code
	}; //answerEvent

	render() {
		return (
			<div className="App">
				<Header />
				{/* <Button btnAnswer={this.answerEvent} /> */}
			</div>
		);
	} //render

	componentDidMount() {
		this.getQuestions();
	} //componentDidMount
} //App

export default App;
