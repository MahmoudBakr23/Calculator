import React, { Component } from 'react';
import './App.css';
import Display from './Components/Display';
import ButtonPanel from './Components/ButtonPanel';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Milestone 2</h1>
        <div className="Calculator">
          <Display result="0" />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}
