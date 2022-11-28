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

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score)

    return window.location.assign('/end.html')
  }

  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
  progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

  const questionIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionIndex]
  question.innerText = currentQuestion.question

  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionIndex, 1)

  acceptingAnswers = true

}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if(classToApply === 'correct') {
      incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
      selectedChoice.parentElement.classList.add(classToApply)
      getNewQuestion()
    }, 1000)
  })
})

incrementScore = num => {
  score +=num
  scroeText.innerText = score
}

startGame