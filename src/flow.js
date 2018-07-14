import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greeting = () => console.log('Welcome to the Brain Games!');

const getPlayerName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};

const attempts = 3;

export default (features, rules) => {
  greeting();
  console.log(rules);
  const userName = getPlayerName();

  for (let countAttempts = 0; countAttempts < attempts; countAttempts += 1) {
    const parameters = features();
    const question = car(parameters);
    const correctAnswer = cdr(parameters);

    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!\n`);
};
