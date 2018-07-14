import { cons } from 'hexlet-pairs';
import flow from '../flow';
import getRandomInt from '../utils';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no".';

const distinctiveFeatures = () => {
  const number = getRandomInt(1, 100);
  return cons(`${number}`, isEven(number) ? 'yes' : 'no');
};

export default () => flow(distinctiveFeatures, description);
