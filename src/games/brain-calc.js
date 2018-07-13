import { cons } from 'hexlet-pairs';
import flow from '../flow';
import { getRandomInt, getRandomOperator, calculateOperation } from '../utils';

const description = 'What is the result of the expression?\n';

const distinctiveFeatures = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const operator = getRandomOperator();

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculateOperation(number1, operator, number2));
  return cons(question, correctAnswer);
};

export default () => flow(distinctiveFeatures, description);
