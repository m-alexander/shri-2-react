import ReactDOM from "react-dom";
import "./styles.css";

const Modal = ({ children }) => {
	return ReactDOM.createPortal(
		<dialog className="modal">{children}</dialog>,
		document.getElementById("modals")
	);
};

export default Modal;
