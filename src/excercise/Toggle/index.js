import React, { Component} from 'react';

class Toggle extends Component {
  state = {
    isOn: this.props.initialState || false,
  }

  handleClick = () => {
    const isOn = !this.state.isOn;

    if (this.props.onToggle) {
      this.props.onToggle(isOn);
    }

    this.setState({ isOn });
  }

    // Call the 
  render() {
    return (
      <div className={`toggle ${this.state.isOn ? 'on' : 'off'}`}>
        <button onClick={this.handleClick}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Toggle;
