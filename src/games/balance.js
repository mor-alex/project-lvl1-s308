import { cons } from 'hexlet-pairs';
import flow from '../flow';
import getRandomInt from '../utils';

const getArrFromNum = (numeral) => {
  const arr = Array.from(Array.from(String(numeral)), i => Number(i));
  return arr;
};

const balance = (num) => {
  const array = getArrFromNum(num);

  let goodEnough = false;
  while (goodEnough === false) {
    let indOfMinValue = 0;
    let indOfMaxValue = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] < array[indOfMinValue]) { indOfMinValue = i; }
      if (array[i] > array[indOfMaxValue]) { indOfMaxValue = i; }
    }
    if (Math.abs(array[indOfMaxValue] - array[indOfMinValue]) <= 1) { goodEnough = true; }
    if (goodEnough === false) {
      array[indOfMinValue] += 1;
      array[indOfMaxValue] -= 1;
    }
  }
  return String(array.sort().join(''));
};

const description = 'Balance the given number.\n';

const distinctiveFeatures = () => {
  const number = getRandomInt(100, 10000);
  const question = `${number}`;
  const correctAnswer = balance(number);
  return cons(question, correctAnswer);
};

export default () => flow(distinctiveFeatures, description);
