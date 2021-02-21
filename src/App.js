import React, { Component } from 'react';
import './App.css';
import Display from './Display';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Milestone 2</h1>
        <Display />
      </div>
    );
  }
}
