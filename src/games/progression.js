import { cons } from 'hexlet-pairs';
import flow from '../flow';
import getRandomInt from '../utils';

const lengthOfProgression = 10;

const getArithmProgression = () => {
  const firstNum = getRandomInt(0, 10);
  const difference = getRandomInt(0, 10);
  const arrayOfNum = [firstNum];
  for (let i = 1; i < lengthOfProgression; i += 1) {
    arrayOfNum.push(firstNum + (difference * i));
  }
  return Array.from(arrayOfNum, j => String(j));
};

const description = 'What number is missing in this progression?';

const distinctiveFeatures = () => {
  const progression = getArithmProgression();
  const hiddenIndex = getRandomInt(0, lengthOfProgression - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return cons(question, correctAnswer);
};

export default () => flow(distinctiveFeatures, description);
