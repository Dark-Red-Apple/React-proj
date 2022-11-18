import React, { Component } from 'react';

export default class Slide extends Component {
  render() {
    return <div className='slide' style={{maxHeight: '300px'}}>
        <p>{this.props.cont}</p>
        <h2>{this.props.name}</h2>
        <h3>{this.props.prof}</h3>

    </div>;
  }
}
