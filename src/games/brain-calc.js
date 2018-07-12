import { cons } from 'hexlet-pairs';
import { getRandomInt, flow } from '..';

const getRandomOperator = () => {
  const collectionOfOperators = ['+', '-', '*'];
  return collectionOfOperators[getRandomInt(0, 2)];
};

const calculate = (num1, operator, num2) => {
  let result = 0;
  if (operator === '+') {
    result = num1 + num2;
  } if (operator === '-') {
    result = num1 - num2;
  } if (operator === '*') {
    result = num1 * num2;
  }
  return result;
};

const description = 'What is the result of the expression?\n';

const distinctiveFeatures = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const operator = getRandomOperator();

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, operator, number2));
  return cons(question, correctAnswer);
};

export default () => flow(distinctiveFeatures, description);
