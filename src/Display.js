import React, { Component } from 'react';

export default class Display extends React.Component {
  render() {
    return (
      <div className="Display">
        <h2>
          I am the Display.
          <small> I am a child component of the App component</small>
        </h2>
      </div>
    );
  }
}
