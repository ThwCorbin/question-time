import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
	}
	render() {
		// React forms https://reactjs.org/docs/forms.html#gatsby-focus-wrapper
		return (
			<form
				className={this.props.className}
				onClick={this.props.callback}
			></form>
		);
	}
} //Form

export default Form;
