import Button from './Button';

const ButtonPanel = () => (
  <div className="ButtonPanel">
    <div className="buttons group1">
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" />
      <Button name="AC" className="ac" />
    </div>
    <div className="buttons group2">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="×" />
    </div>
    <div className="buttons group3">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" />
    </div>
    <div className="buttons group4">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" />
    </div>
    <div className="buttons group5">
      <Button name="del" className="del" />
      <Button name="0" />
      <Button name="." />
      <Button name="=" className="eq" />
    </div>
  </div>
);

export default ButtonPanel;
