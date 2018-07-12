import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};

const flow = (features, rules) => {
  greeting();
  console.log(rules);
  const userName = getPlayerName();

  const repeatGame = (numOfSucAttempts, acc) => {
    if (acc === numOfSucAttempts) {
      console.log(`Congratulations, ${userName}!\n`);
      return;
    }
    const parameters = features();
    const question = car(parameters);
    const correctAnswer = cdr(parameters);

    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
    repeatGame(numOfSucAttempts, acc + 1);
  };
  repeatGame(3, 0);
};

export {
  getRandomInt, greeting, getPlayerName, flow,
};
