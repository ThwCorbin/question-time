import React from "react";
import "./Answer.css";

function Answer(props) {
	return (
		<li className="li-answer" onClick={props.btnCallback}>
			{props.answer}
		</li>
	);
} //Answer

export default Answer;
