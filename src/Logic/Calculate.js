import operate from './Operate';

export default function calculate(data, buttonName) {
  let {
    total, next, operation, answer,
  } = data;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', 'x', '-', '÷', '%'];

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
  } else if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
    answer *= -1;
  } else if (buttonName === '%') {
    operation = '%';
    if (total && operation) {
      total = operate(total, 100, operation);
      operation = null;
    } else if (total && next && operation) {
      next = operate(next, 100, operation);
    }
  } else if (buttonName === '.') {
    if (next) {
      return { total, next: `${next}.` };
    }
    if (total) {
      return { total: `${total}.`, next };
    }
    return { total: '0.', next };
  } else if (buttonName === 'del') {
    if (next) {
      next = (next).slice(0, -1);
    } else if (total) {
      total = (total).slice(0, -1);
    }
  }

  if (total && next && operation && operators.includes(buttonName)) {
    total = operate(total, next, operation);
    answer = total;
    next = null;
    operation = null;
  }

  if (operators.includes(buttonName)) {
    operation = buttonName;
  } else if (numbers.includes(buttonName) && operation) {
    if (next) {
      next += buttonName;
    } else {
      next = buttonName;
    }
  } else if (numbers.includes(buttonName)) {
    if (total) {
      total += buttonName;
    } else {
      total = buttonName;
    }
  }

  return {
    total, next, operation, answer,
  };
}
