import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

// let App = document.querySelector(".App");

function Modal(props) {
	const { activeModal, modalCallback } = props;
	if (activeModal) {
		return ReactDOM.createPortal(
			<div className="modal" onClick={modalCallback}>
				Hiya Luna!
			</div>,
			document.getElementById("root")
		);
	} else {
		return ReactDOM.createPortal(<div></div>, document.getElementById("root"));
	}
} //Modal

export default Modal;
