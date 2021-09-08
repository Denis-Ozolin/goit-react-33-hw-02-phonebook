import React, { Component } from 'react';

export class Filter extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    const { value } = event.currentTarget;

    this.setState({ value });

    this.props.onGetValue(value);
  };

  render() {
    const { value } = this.state;
    return (
      <label>
        Find contacts by name
        <input onChange={this.handleChange} value={value} type="text" />
      </label>
    );
  }
}
