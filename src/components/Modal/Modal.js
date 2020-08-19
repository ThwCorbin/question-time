import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import Form from "../Form/Form";

// let App = document.querySelector(".App");

function Modal(props) {
	const { activeModal, modalCallback, cRUD } = props;
	if (activeModal) {
		return ReactDOM.createPortal(
			<div className="modal">
				<div className="modal-content">
					<Form modalCallback={modalCallback} cRUD={cRUD} />
				</div>
			</div>,
			document.getElementById("root")
		);
	} else {
		//* saves a space in the DOM with "<div></div>"
		//* without below, Modal is added below other compoents
		//* when the modal state changes to active
		return ReactDOM.createPortal(<div></div>, document.getElementById("root"));
	}
} //Modal

export default Modal;
