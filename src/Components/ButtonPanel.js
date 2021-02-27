import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="ButtonPanel">
    <div className="buttons group1">
      <Button name="+/-" handler={clickHandler} />
      <Button name="%" handler={clickHandler} />
      <Button name="÷" handler={clickHandler} />
      <Button name="AC" className="ac" handler={clickHandler} />
    </div>
    <div className="buttons group2">
      <Button name="7" handler={clickHandler} />
      <Button name="8" handler={clickHandler} />
      <Button name="9" handler={clickHandler} />
      <Button name="x" handler={clickHandler} />
    </div>
    <div className="buttons group3">
      <Button name="4" handler={clickHandler} />
      <Button name="5" handler={clickHandler} />
      <Button name="6" handler={clickHandler} />
      <Button name="-" handler={clickHandler} />
    </div>
    <div className="buttons group4">
      <Button name="1" handler={clickHandler} />
      <Button name="2" handler={clickHandler} />
      <Button name="3" handler={clickHandler} />
      <Button name="+" handler={clickHandler} />
    </div>
    <div className="buttons group5">
      <Button name="del" className="del" handler={clickHandler} />
      <Button name="0" handler={clickHandler} />
      <Button name="." handler={clickHandler} />
      <Button name="=" className="eq" handler={clickHandler} />
      <Button name="A" className="answer" handler={clickHandler} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.isRequired,
};

export default ButtonPanel;
