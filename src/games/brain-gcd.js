import { cons } from 'hexlet-pairs';
import flow from '../flow';
import { getRandomInt, getGreatComDiv } from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';

const distinctiveFeatures = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGreatComDiv(number1, number2));
  return cons(question, correctAnswer);
};

export default () => flow(distinctiveFeatures, description);
