import { Component } from "react";
import "./Modal.css"

class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyboard);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyboard);
    }

    handleKeyboard = (e) => {
        if (e.code === "Escape") {
            this.props.onClose();
        }
    }

    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

  render() {
    return (
      <div className="backdrop" onClick={this.handleBackdropClick}>
        <div className="modal">
          <img
            className="modal-img"
            src={this.props.image}
            alt="img"
          />
        </div>
      </div>
    );
  }
}

export default Modal;
