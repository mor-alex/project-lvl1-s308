import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { greeting, getPlayerName } from './utils';

export default (features, rules) => {
  greeting();
  console.log(rules);
  const userName = getPlayerName();

  const AttemptsToEnd = 3;
  let countOfAttempts = 0;

  while (countOfAttempts < AttemptsToEnd) {
    const parameters = features();
    const question = car(parameters);
    const correctAnswer = cdr(parameters);

    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      countOfAttempts += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};
