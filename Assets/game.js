var timer;
var timerInterval = document.getElementById("timerInterval");
var question = document.getElementById("question");
var button = document.getElementsByClassName("choice-container");
var score = document.getElementById("score");
var startButton = document.getElementById("startButton");
var game = document.getElementById("game");
var gameDisplay = document.getElementById("gameDisplay");

let questions = [
  {
    question: "What Does JS Stand For?",
    choices: ["Absolutely Nothing", "John Stamos", "Java Script", "Java Joe's"
    ],
    answer: 2
  },

  {
    question: "What Number is the First Object in an Array?",
    choices: ["612", "1", "I don't know, man.", "0"],
    answer: 3
  },

  {
    question: "What do you link in your HTML to make your JS work?",
    choices: ["Your Script File", "Your CSS File", "Nothing, it just Works", "Dang it, that's why it's not working"],
    answer: 0,
  }
]
var currentQuestion = 0;

var clockTick = function (decrement = 1) {
  var seconds = Math.max(0, +timerInterval.textContent - decrement);
  timerInterval.textContent = seconds;
  if (seconds <= 0) {
    endQuiz();
    clearInterval(timer);
  }
};
var getNewQuestion = function () {
  if (currentQuestion >= questions.length) {
    return endQuiz();
  }
  const updateQuestion = questions[currentQuestion];
  question.textContent = updateQuestion.question;
  updateQuestion.choices.forEach((option, index) => {
    var thisButton = button[index];
    var choiceText = thisButton.getElementsByClassName("choice-text")[0];
    choiceText.textContent = option;
  })
};

var answerQuestion = function (event) {
  // verify if it's right or wrong
  const btn = event.currentTarget;
  const currQues = questions[currentQuestion];
  // if wrong remove time
  const isCorrect = currQues.answer == btn.dataset.number;
  if (!isCorrect) {
    clockTick(2)
  }
  // if right give points
  else {
    score.textContent = +score.textContent + 10
  }
  // go to next question
  currentQuestion++;
  getNewQuestion();

};

var endQuiz = function () {
  clearInterval(timer);
  startButton.removeAttribute("hidden");
  gameDisplay.setAttribute("hidden", true);
};


var startGame = () => {
  // reset score
  score.textContent = 0;
  // reset timer
  timerInterval.textContent = 60;
  // bring questions back
  currentQuestion = 0;
  startButton.setAttribute("hidden", true);
  gameDisplay.removeAttribute("hidden");
  timer = setInterval(clockTick, 1000)
  getNewQuestion()

};

startGame();

for (const btn of button) {
  btn.addEventListener("click", answerQuestion)
};

startButton.addEventListener("click", startGame);