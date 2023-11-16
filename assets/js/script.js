/* jshint esversion: 11 */
const startButton = document.getElementById('start-btn');
const welcome = document.getElementById('welcome');
const scoreArea = document.getElementById('score-area');
const container = document.getElementById('container');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {

  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  welcome.classList.add('hide');
  scoreArea.classList.remove('hide');
  container.classList.remove('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct;
  setStatusClass(document.body, isCorrect);
  if (isCorrect) {
    incrementScore();
  } else {
    incrementWrongAnswer();
  }
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(button, isCorrect) {
  clearStatusClass(button);
  if (isCorrect) {
    button.classList.add('correct');
  } else {
    button.classList.add('wrong');
  }
}

function clearStatusClass(button) {
  button.classList.remove('correct');
  button.classList.remove('wrong');
}

const questions = [{
    question: 'What movie ?',
    answers: [{
        text: 'I',
        correct: false
      },
      {
        text: 'L',
        correct: false
      },
      {
        text: 'U',
        correct: true
      }
    ]
  },
  {
    question: 'What movie ?',
    answers: [{
        text: 'I',
        correct: false
      },
      {
        text: 'L',
        correct: false
      },
      {
        text: 'U',
        correct: true
      }
    ]
  },
  {
    question: 'What movie ?',
    answers: [{
        text: 'I',
        correct: true
      },
      {
        text: 'L',
        correct: false
      },
      {
        text: 'U',
        correct: false
      }
    ]
  },
  {
    question: 'Who is her co-star ...?',
    answers: [{
        text: 'I',
        correct: true
      },
      {
        text: 'L',
        correct: false
      },
      {
        text: 'U',
        correct: false
      }
    ]
  },
  {
    question: 'Who is her co-star ...?',
    answers: [{
        text: 'I',
        correct: true
      },
      {
        text: 'L',
        correct: false
      },
      {
        text: 'U',
        correct: false
      }
    ]
  },
  {
    question: 'Who is her co-star in ...?',
    answers: [{
        text: 'I',
        correct: false
      },
      {
        text: 'L',
        correct: true
      },
      {
        text: 'U',
        correct: false
      }
    ]
  },
  {
    question: 'Where does the line ... appear?',
    answers: [{
        text: 'I',
        correct: false
      },
      {
        text: 'L',
        correct: true
      },
      {
        text: 'U',
        correct: false
      }
    ]
  },
  {
    question: 'Where does the line ... appear?',
    answers: [{
        text: 'I',
        correct: true
      },
      {
        text: 'L',
        correct: false
      },
      {
        text: 'U',
        correct: false
      }
    ]
  },
  {
    question: 'Where does the line ... appear?',
    answers: [{
        text: 'I',
        correct: false
      },
      {
        text: 'L',
        correct: false
      },
      {
        text: 'U',
        correct: true
      }
    ]
  }
];

function incrementScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() {

  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;

}