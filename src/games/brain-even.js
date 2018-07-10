import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
  console.log('Welcome to the Brain Games!\n');
  console.log('Answer "yes" if number odd otherwise answer "no".\n');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!\n`);

  const question = (number, acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${getName}!\n`);
    }
    console.log('Question: ', number);
    const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
    const correctAnswer = isEven(number);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      acc += 1;
      console.log('Correct!');
      return question(getRandomInt(1, 100), acc);
    } if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return console.log(`Let's try again, ${getName}!\n`);
    }
  };
  question(getRandomInt(1, 100), 0);
};
