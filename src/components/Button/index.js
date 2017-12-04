import React, { Component } from 'react';

const MyChildComponent = ({ children }) => (
  <span>{children}</span>
);

class Button extends Component {
  state = {
    color: this.props.inactive || 'green',
  };

  handleClick = () => {
    this.setState({
      color: this.props.active || 'red',
    });
  }

  render() {
    return (
      <button style={{
        backgroundColor: this.state.color
      }} onClick={this.handleClick}>
        <MyChildComponent>Click me!</MyChildComponent>
      </button>
    );
  }
}

export default Button;
