import React, { Component } from "react";
import "./Form.css";

// React forms https://reactjs.org/docs/forms.html#gatsby-focus-wrapper
class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// value: "",
			question: "",
			answers: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.modalCallback(null, this.state.question, this.state.answers);
	}

	render() {
		// className={this.props.className}
		if (this.props.cRUD === "DELETE") {
			return (
				<form className="form form-add" onSubmit={this.handleSubmit}>
					<input type="submit" value="Delete Question" />
					<p className="cancel" onClick={this.props.modalCallback}>
						Cancel
					</p>
				</form>
			);
		} else {
			return (
				<form className="form form-add" onSubmit={this.handleSubmit}>
					<label>
						Question:
						<br />
						<input
							name="question"
							type="text"
							value={this.state.question}
							onChange={this.handleChange}
						/>
					</label>
					<br />
					<label>
						Answers:
						<br />
						<input
							name="answers"
							type="text"
							value={this.state.answers}
							placeholder="Up to 4 separated by commas - first is correct"
							onChange={this.handleChange}
						/>
					</label>
					<br />
					<input type="submit" value="Submit" />
					<p className="cancel" onClick={this.props.modalCallback}>
						Cancel
					</p>
				</form>
			);
		} //if/else
	} //render()
} //Form

export default Form;
