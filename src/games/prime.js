import { cons } from 'hexlet-pairs';
import flow from '../flow';
import getRandomInt from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const n = Math.sqrt(num);
  for (let i = 2; i <= n; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Is this number prime?';

const distinctiveFeatures = () => {
  const number = getRandomInt(0, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => flow(distinctiveFeatures, description);
