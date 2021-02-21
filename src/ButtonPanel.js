import React, { Component } from 'react';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe() {
    console.log('Hello there!');
  }

  render() {
    const { clickMe } = this;
    return (
      <div className="ButtonPanel">
        <h2>
          I am the ButtonPanel.
          <small>
            {' '}
            I am a child component of the App component, also I will contain
            all the buttons
          </small>
        </h2>
        <Button clickMe={clickMe} />
      </div>
    );
  }
}
