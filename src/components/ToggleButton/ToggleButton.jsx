import React, { Component } from "react";

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
    };
  }

  toggleButton = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleButton}>
          {this.state.isShown ? "Show" : "Hide"}
        </button>
      </div>
    );
  }
}

export default ToggleButton;
