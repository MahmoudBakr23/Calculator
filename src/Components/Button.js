import React, { Component } from 'react';

export default class Button extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="Button">
        <button type="button">{name}</button>
      </div>
    );
  }
}
