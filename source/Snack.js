import React, { Component } from 'react';

class Snack extends Component {
  render () {
    return (
      <div>{ this.props.name}</div>
    );
  }
}

export default Snack;
