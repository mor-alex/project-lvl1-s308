import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
  const collectionOfOperators = ['+', '-', '*'];
  return collectionOfOperators[getRandomInt(1, 3)];
};

const calc = (num1, operator, num2) => {
  let result = 0;
  if (operator === '+') {
    result = num1 + num2;
  } if (operator === '-') {
    result = num1 - num2;
  } if (operator === '*') {
    result = num1 * num2;
  }
  return result;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const runCalcGame = (numOfSucAttempts, acc) => {
    if (acc === numOfSucAttempts) {
      console.log(`Congratulations, ${userName}!\n`);
      return;
    }
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    const operator = getRandomOperator();
    console.log('Question: ', number1, ' ', operator, '', number2);
    const correctAnswer = String(calc(number1, operator, number2));
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
    runCalcGame(numOfSucAttempts, acc + 1);
  };
  runCalcGame(3, 0);
};
