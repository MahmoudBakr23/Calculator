import React, { Component } from 'react';

export default class Button extends React.Component {
  render() {
    const { clickMe } = this.props;
    return (
      <div className="Button">
        <h3>
          I am the representer of a Button.
          <small>
            {' '}
            I am a child component of the ButtonPanel component,
            {' '}
            I also have a unique property called clickMe!
          </small>
        </h3>
        <button type="button" onClick={clickMe}>Click Me! (see console)</button>
      </div>
    );
  }
}
