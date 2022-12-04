var timer;
var timerInterval = document.getElementById("timerInterval");

let questions = [
  {
    question: "What Does JS Stand For?",
    choices: ["Absolutely Nothing", "John Stamos", "Java Script", "Java Joe's"
    ],
    answer: "Java Script"
  },

  {
    question: "What Number is the First Object in an Array?",
    choices: ["612", "1", "I don't know, man.", "0"],
    answer: "0"
  },

  {
    question: "What do you link in your HTML to make your JS work?",
    choices: ["Your Script File", "Your CSS File", "Nothing, it just Works", "Dang it, that's why it's not working"],
    answer: "Your Script File",
  }
]

var clockTick = function(){
  var seconds = +timerInterval.textContent;
  timerInterval.textContent = seconds - 1;
  if (seconds <= 1) {
    clearInterval(timer);
  } 
};
var getNewQuestion = function(){};

startGame = () => {
  timer = setInterval(clockTick, 1000)
  getNewQuestion()
}


startGame();

