import React from "react";
import "./Button.css";

function Button(props) {
	return (
		<li className={props.btnClass} onClick={props.btnCallback}>
			{props.btnName}
		</li>
	);
} //Button

export default Button;
