import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');

const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};

const isEven = num => num % 2 === 0;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const collectionOfOperators = ['+', '-', '*'];

const getRandomOperator = () => collectionOfOperators[getRandomInt(0, 2)];

const calculateOperation = (num1, operation, num2) => {
  switch (operation) {
    case '+': return (num1 + num2);
    case '-': return (num1 - num2);
    default: return (num1 * num2);
  }
};

const getRemain = (x, y) => x % y;

const getGreatComDiv = (a, b) => ((b === 0) ? a : getGreatComDiv(b, getRemain(a, b)));

export {
  greeting, getPlayerName, isEven, getRandomInt, getRandomOperator, calculateOperation,
  getGreatComDiv,
};
