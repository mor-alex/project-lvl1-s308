import { cons } from 'hexlet-pairs';
import flow from '../flow';
import getRandomInt from '../utils';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const distinctiveFeatures = () => {
  const number = getRandomInt(1, 100);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => flow(distinctiveFeatures, description);
