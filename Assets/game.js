const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const scroeText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [
  {
    question: "What Does JS Stand For?",
    choice1: "Absolutely Nothing",
    choice2: "John Stamos",
    choice3: "Java Script",
    choice4: "Java Joe's",
    answer: 3,
},

{
  question: "What Number is the First Object in an Array?",
  choice1: "612",
  choice2: "1",
  choice3: "I don't know, man.",
  choice4: "0",
  answer: 4,
},

{
  question: "What do you link in your HTML to make your JS work?",
  choice1: "Your Script File",
  choice2: "Your CSS File",
  choice3: "Nothing, it just Works",
  choice4: "Dang it, that's why it's not working",
  answer: 1,
}
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 3

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

