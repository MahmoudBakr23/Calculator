import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Milestone 2</h1>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
