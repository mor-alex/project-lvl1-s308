import { cons } from 'hexlet-pairs';
import flow from '../flow';
import getRandomInt from '../utils';

const collectionOfOperators = ['+', '-', '*'];

const getRandomOperator = () => collectionOfOperators[getRandomInt(0, 2)];

const calculateOperation = (num1, operation, num2) => {
  switch (operation) {
    case '+': return (num1 + num2);
    case '-': return (num1 - num2);
    default: return (num1 * num2);
  }
};

const description = 'What is the result of the expression?';

const distinctiveFeatures = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const operator = getRandomOperator();

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculateOperation(number1, operator, number2));
  return cons(question, correctAnswer);
};

export default () => flow(distinctiveFeatures, description);
