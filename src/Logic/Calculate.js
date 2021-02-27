import operate from './Operate';

export default function calculate(data, buttonName) {
  let {
    total, next, operation, answer,
  } = data;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', 'x', '-', '÷'];

  if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      answer = total;
      next = null;
      operation = null;
      total = null;
    } else if (answer && next && operation) {
      total = operate(answer, next, operation);
      answer = total;
      next = null;
      operation = null;
      total = null;
    } else if (total && answer && operation) {
      total = operate(total, answer, operation);
      answer = total;
      next = null;
      operation = null;
      total = null;
    }
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
    answer = null;
  } else if (buttonName === 'A') {
    total = answer;
    next = null;
  } else if (buttonName === 'A' && operation) {
    next = answer;
  }
}
