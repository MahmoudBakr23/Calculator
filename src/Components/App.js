import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../Logic/Calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      answer: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(buttonName) {
    this.setState(data => calculate(data, buttonName));
  }

  render() {
    const { clickHandler } = this;
    const { total, next, answer } = this.state;
    const result = next || total || answer || '0';
    return (
      <div className="App">
        <h1 className="header">Milestone 4</h1>
        <div className="Calculator">
          <>
            <Display result={result.toString()} />
            <ButtonPanel clickHandler={clickHandler} />
          </>
        </div>
      </div>
    );
  }
}
export default App;
