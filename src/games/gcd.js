import { cons } from 'hexlet-pairs';
import flow from '../flow';
import getRandomInt from '../utils';

const getRemain = (x, y) => x % y;

const getGreatComDiv = (a, b) => ((b === 0) ? a : getGreatComDiv(b, getRemain(a, b)));

const description = 'Find the greatest common divisor of given numbers.';

const distinctiveFeatures = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGreatComDiv(number1, number2));
  return cons(question, correctAnswer);
};

export default () => flow(distinctiveFeatures, description);
