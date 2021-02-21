import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => (
  <div className="App">
    <h1 className="header">Milestone 2</h1>
    <div className="Calculator">
      <>
        <Display result="0" />
        <ButtonPanel />
      </>
    </div>
  </div>
);

export default App;
