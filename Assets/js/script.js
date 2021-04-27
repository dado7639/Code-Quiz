var qIndex = 0;
var startBtn = document.getElementById("start");
// count down
var timerCount = 30;
var timer = document.getElementById("timer");
var questionBox = document.getElementById("questionBox");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var scoreBox = document.getElementById("scoreBox");

var userScore = 0;

var questions = [
  {
    quote: "which data type in JS is true or false?",
    options: ["Array", "Boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
  {
    quote: "The condition of an if/else statement is wrapped in",
    options: ["Quotes", "Parentheses", "Curly Brackets", "Sqaure Brackets "],
    correct: "Parentheses",
  },
  {
    quote: "which data type in Javascript is true or false?",
    options: ["Array", "Boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
  {
    quote: "Which data type in JS is true or false",
    options: ["Array", "Boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
  {
    quote: "which data type in JS is true or false?",
    options: ["Array", "Boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
];

//how to show the timer on screen
// helper function that counts down timercount by 1
function countDown() {
  //   backtick same as quotation marks... dollar sign inject
  timer.innerHTML = `<h2>Timer: ${timerCount}</h2>`;
  timerCount--;
}

// caputre users answer and check to see if it is correct answer
function checkAnswer(e) {
  // targets user selection
  var answer = e.target.innerText;
  console.log(answer);

  //cannot set answer = to question correct answer
  //   !!!!! NEED HELP WITH THIS !!!!
  if (answer === questions[qIndex].correct) {
    userScore++;
    scoreBox.innerHTML = `<h2>Score: ${userScore}</h2>`;
    console.log(userScore);
    // if answer correct, add one to question index
    qIndex++;
    // run questionCycle again prompting new question
    questionCycle();
    // box for user score have it update everytime this happens
  } else {
    // decreases timer by one second if user selects wrong answer
    timerCount--;
    qIndex++;
    scoreBox.innerHTML = `<h2>Score: ${userScore}</h2>`;
    // prompts new question if answered incorrectly
    questionCycle();
  }

  if (timerCount === 0) {
    alert("TIME IS UP!");
  }
}

function startQuiz() {
  //timer starts and present a question
  //   clearInterval(countDown);
  setInterval(countDown, 1000);
  questionCycle();

  // after answered or timer reachs 0 game vover
  //save score and initials in local storage
}

function questionCycle() {
  //unhide buttons
  answerBox.classList.remove("hide");
  questionBox.innerHTML = `
    <h2>Question: ${questions[qIndex].quote}</h2>
    `;
  button1.innerText = questions[qIndex].options[0];
  button2.innerText = questions[qIndex].options[1];
  button3.innerText = questions[qIndex].options[2];
  button4.innerText = questions[qIndex].options[3];

  // add event listeners to each button
  button1.addEventListener("click", checkAnswer);
  button2.addEventListener("click", checkAnswer);
  button3.addEventListener("click", checkAnswer);
  button4.addEventListener("click", checkAnswer);
}

startBtn.addEventListener("click", startQuiz);
