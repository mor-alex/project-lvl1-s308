import { cons } from 'hexlet-pairs';
import flow from '../flow';
import getRandomInt from '../utils';

const getArrFromNum = (numeral) => {
  const arr = Array.from(Array.from(String(numeral)), i => Number(i));
  return arr;
};

const balanceArr = (arr) => {
  const array = arr.sort();

  if (Math.abs(array[arr.length - 1] - array[0]) > 1) {
    array[0] += 1;
    array[arr.length - 1] -= 1;
    return balanceArr(array);
  }
  return String(array.sort().join(''));
};

const description = 'Balance the given number.';

const distinctiveFeatures = () => {
  const number = getRandomInt(100, 10000);
  const question = `${number}`;
  const correctAnswer = balanceArr(getArrFromNum(number));
  return cons(question, correctAnswer);
};

export default () => flow(distinctiveFeatures, description);
