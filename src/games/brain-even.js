import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = num => num % 2 === 0;

const happyend = name => console.log(`Congratulations, ${name}!\n`);

const badend = name => console.log(`Let's try again, ${name}!\n`);

export default () => {
  console.log('Welcome to the Brain Games!\n');
  console.log('Answer "yes" if number odd otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const runEvenGame = (acc, numOfSucAttempts) => {
    const number = getRandomInt(1, 100);
    console.log('Question: ', number);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) { console.log('Correct!'); }
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return badend;
    }
    if (acc === numOfSucAttempts) {
      return happyend(userName);
    }
    return runEvenGame(acc + 1, numOfSucAttempts);
  };
  runEvenGame(1, 3);
};
