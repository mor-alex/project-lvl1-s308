import { cons } from 'hexlet-pairs';
import { getRandomInt, flow } from '..';

const remainder = (x, y) => x % y;

const gcd = (a, b) => ((b === 0) ? a : gcd(b, remainder(a, b)));

const description = 'Find the greatest common divisor of given numbers.\n';

const distinctiveFeatures = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);

  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return cons(question, correctAnswer);
};

export default () => flow(distinctiveFeatures, description);
