var qIndex = 0;
var startBtn = document.getElementById("start");

var questions = [
  {
    quote: "which data type in JS is true or false?",
    options: ["array", "boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
  {
    quote: "The condition of an if/else statement is wrapped in",
    options: ["quotes", "parentheses", "curly brackets", "sqaure brackets "],
    correct: "parentheses",
  },
  {
    quote: "which data type in Javascript is true or false?",
    options: ["array", "boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
  {
    quote: "Which data type in JS is true or false",
    options: ["array", "boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
  {
    quote: "which data type in JS is true or false?",
    options: ["array", "boolean", "Integer", "All of the above"],
    correct: "Boolean",
  },
];

function startQuiz() {}

function questionCycle() {
  //loop through questions
  var presentQuestions = question[qindex];
}

startBtn.oneclick = startQuiz();
