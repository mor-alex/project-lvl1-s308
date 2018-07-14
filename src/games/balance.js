import { cons } from 'hexlet-pairs';
import flow from '../flow';
import getRandomInt from '../utils';

const getArrFromNum = (numeral) => {
  const arr = Array.from(Array.from(String(numeral)), i => Number(i));
  return arr;
};

const balanceArr = (arr) => {
  const array = arr;

  let isGoodEnough = false;
  while (!isGoodEnough) {
    let indOfMin = 0;
    let indOfMax = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] < array[indOfMin]) { indOfMin = i; }
      if (array[i] > array[indOfMax]) { indOfMax = i; }
    }
    if (Math.abs(array[indOfMax] - array[indOfMin]) <= 1) { isGoodEnough = true; }
    if (!isGoodEnough) {
      array[indOfMin] += 1;
      array[indOfMax] -= 1;
    }
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
