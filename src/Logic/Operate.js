import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = new Big(numberOne);
  const two = new Big(numberTwo);

  switch (operation) {
    case '+':
      return one.plus(two);
    case '-':
      return one.minus(two);
    case 'x':
      return one.times(two);
    case '÷':
      return one.div(two);
    default:
      return 0;
  }
}
