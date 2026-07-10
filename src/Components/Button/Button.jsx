import { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <>
        <button onClick={onClick} className="load-more-btn" type="button">
          Load more
        </button>
      </>
    );
  }
}

export default Button;
