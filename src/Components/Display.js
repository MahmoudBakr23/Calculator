import React, { Component } from 'react';

export default class Display extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div className="Display">
        {result}
      </div>
    );
  }
}
