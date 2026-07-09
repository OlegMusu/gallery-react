import { Component } from "react";
import { IoSearch } from "react-icons/io5";
import "./Searchbar.css";

class Searchbar extends Component {
  state = {
    qwery: "",
  };

  handleChange = (e) => {
    this.setState({ qwery: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.qwery === "") {
      "Please enter a search query";
      return;
    }
    this.props.onSubmit(this.state.qwery);
    
  }

  render() {

    const { qwery } = this.state;
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">
              <IoSearch />
            </span>
          </button>

          <input
            value={qwery}
            onChange={this.handleChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
