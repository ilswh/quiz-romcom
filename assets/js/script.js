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

// function to be able to start game
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

// what happens when someone clicks next
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// shows a question
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

// resets to default when moving on to new question
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// what happens when someone selects an answer
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

// tells computer know what to do after finding out if a answer is correct/wrong
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

// questions and arrays with options
const questions = [{
    question: 'In what movie is Julia playing Maggie Carpenter?',
    answers: [{
        text: 'Sweet Home Alabama',
        correct: false
      },
      {
        text: 'Pretty Woman',
        correct: false
      },
      {
        text: 'Runaway Bride',
        correct: true
      }
    ]
  },
  {
    question: 'In what movie is Roberts playing Vivian Ward?',
    answers: [{
        text: 'Americas Sweethearts',
        correct: false
      },
      {
        text: 'Pretty Woman',
        correct: true
      },
      {
        text: 'When Harry Met Sally',
        correct: false
      }
    ]
  },
  {
    question: 'In what movie is JR playing Anna Scott?',
    answers: [{
        text: 'Notting Hill',
        correct: true
      },
      {
        text: 'Kate & Leopold',
        correct: false
      },
      {
        text: 'Youve got mail',
        correct: false
      }
    ]
  },
  {
    question: 'What actor is her best friend in My Best Friends Wedding?',
    answers: [{
        text: 'Rupert Everett',
        correct: true
      },
      {
        text: 'Cameron Diaz',
        correct: false
      },
      {
        text: 'Paul Giamatti',
        correct: false
      }
    ]
  },
  {
    question: 'Who is her co-star and leading man in Notting Hill?',
    answers: [{
        text: 'Hugh Grant',
        correct: true
      },
      {
        text: 'Rhys Ifans',
        correct: false
      },
      {
        text: 'James Dreyfus',
        correct: false
      }
    ]
  },
  {
    question: 'Who is her co-star, best friend and ex-boyfriends wife in Runaway Bride?',
    answers: [{
        text: 'Rita Wilson',
        correct: false
      },
      {
        text: 'Joan Cusack',
        correct: true
      },
      {
        text: 'Kathleen Marshall',
        correct: false
      }
    ]
  },
  {
    question: 'Where does the line "I want the the fairytale." appear?',
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
      },
      {
        question: 'Who directed her in ...?',
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
        question: 'Who directed her in ...?',
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
        question: 'Who directed her in ...?',
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
      }       
    ]
  }
];

// scoreboard
function incrementScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() {

  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;

}