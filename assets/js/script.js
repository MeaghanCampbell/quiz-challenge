let startQuizBtnEl = document.querySelector("#start-btn");
var countdownEl = document.getElementById('countdown');
let questionNum = 0;

let questions = [
    {
        question: "Which HTML element contains JavaScript?",
        choiceA: "<script>",
        choiceB: "<link>",
        choiceC: "<meta>",
    },
    {
        question: "What are Javascript Arrays wrapped in?",
        choiceA: "Curly Brackets {}",
        choiceB: "Parentheses ()",
        choiceC: "Square Brackets []"
    },
    {
        question: "Which of the following is not a data type used in JavaScript?",
        choiceA: "Boolean",
        choiceB: "Signal",
        choiceC: "String"
    },
    {
        question: "How do you create a function in JavaScript?",
        choiceA: "var functionName = function() { functionCode }",
        choiceB: "var functionName = (function) [ functionCode ]",
        choiceC: "function : functionName ( functionCode )"
    }
];

let correctAnswers = [questions[0].choiceA, questions[1].choiceC, questions[2].choiceB, questions[3].choiceA]

let lastQuestion = questions.length - 1


// function to start the quiz
let startQuiz = function (event) {

    // targets the start button
    var targetEl = event.target;

    if (targetEl.matches("#start-btn")) {
        removeStartButton();
    }
};

function countdown() {
    var timeLeft = 30;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            countdownEl.textContent = 'Time Remaining: ' + timeLeft;
            timeLeft--;
        } else {
            countdownEl.textContent = '';
            clearInterval(timeInterval)
            endQuiz();
        }
    },1000);
};

let removeStartButton = function() {
  // remove start button
  var removeStartButton = document.querySelector("#start-btn");
  removeStartButton.remove();
  showNextQuestion();
};

let showNextQuestion = function() {

  var currentQuestion = questions[questionNum];

  // question title
  var questionTitleEl = document.querySelector("#question-title");
  questionTitleEl.textContent = currentQuestion.question

  // create choice A
  var firstChoiceEl = document.querySelector("#choice-a");
  firstChoiceEl.textContent = currentQuestion.choiceA
  firstChoiceEl.className = "btn";


  // create choice B
  var secondChoiceEl = document.querySelector("#choice-b");
  secondChoiceEl.textContent = currentQuestion.choiceB
  secondChoiceEl.className = "btn";

  // create choice C
  var thirdChoiceEl = document.querySelector("#choice-c");
  thirdChoiceEl.textContent = currentQuestion.choiceC
  thirdChoiceEl.className = "btn";

  // listen for button clicks
  firstChoiceEl.addEventListener("click", answerSelected)
  secondChoiceEl.addEventListener("click", answerSelected)
  thirdChoiceEl.addEventListener("click", answerSelected)

 };
 
 let answerSelected = function() {

    // Unsure of this part...
    if (answer === true) {
        let answerMsg = document.querySelector("#check-answer")
        answerMsg.textContent = 'CORRECT!' 
    } else {
        let answerMsg = document.querySelector("#check-answer")
        answerMsg.textContent = 'WRONG!'
    }

    // moves to next question or ends quiz
    if (questionNum >= lastQuestion) {
        endQuiz();
    } else {
        questionNum++
        showNextQuestion();
    }
 };
 
 let endQuiz = function() {
    //this function runs if an answer is selected, and there are no more questions to ask!
    console.log('you made it to the end of the quiz!')
 };


 // listening for the start button click to move to first question
startQuizBtnEl.addEventListener("click", startQuiz);
startQuizBtnEl.onclick = countdown;





/* the answerSlected function should receive the answer clicked
6:09
Here's how I envision it...
6:09
when your choice buttons are created and rendered, we'd give them the onclick function something like this
6:11
choiceButton.addEventListener("click", function(event){
  var answer = event.target.textcontent //or something similar to that
  answerSelected(answer)
}) */