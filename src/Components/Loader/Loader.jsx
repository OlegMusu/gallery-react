import { Component } from "react";
import "./Loader.css";
import { ThreeDots } from "react-loader-spinner";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ margin: "20px" }}
          wrapperClass="custom-loader"
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
