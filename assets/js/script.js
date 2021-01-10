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
var timeLeft = 30;
var timeInterval = '';


// function to start the quiz
let startQuiz = function (event) {

    // targets the start button
    var targetEl = event.target;

    if (targetEl.matches("#start-btn")) {
        timeInterval = setInterval(countdown, 1000)
        removeStartButton();
    }
};

function countdown() {

        if (timeLeft > 0) {
            countdownEl.textContent = 'Time Remaining: ' + timeLeft;
            timeLeft--;
        } else {
            countdownEl.textContent = '';
            clearInterval(timeInterval)
            endQuiz();
        }
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
 
 let answerSelected = function(e) {

   // Check Answer
   if (correctAnswers[questionNum] === e.target.textContent) {
       let answerMsg = document.querySelector("#check-answer")
       answerMsg.textContent = 'CORRECT!' 
   } else {
       let answerMsg = document.querySelector("#check-answer")
       answerMsg.textContent = 'WRONG!'
       timeLeft = timeLeft - 5;
   }

    // moves to next question or ends quiz
    if (questionNum >= lastQuestion) {
        endQuiz();
    } else {
        questionNum++
        showNextQuestion();
    }
 };

 // how do I stop the timer if it is still running
 
 let endQuiz = function() {
    console.log('you made it to the end of the quiz!')

    var questionTitleEl = document.querySelector("#question-title");
    questionTitleEl.textContent = 'Your final score is ' + timeLeft;

    clearInterval(timeInterval);

    var removeFirstChoice = document.querySelector("#choice-a");
    removeFirstChoice.remove();

    var removeSecondChoice = document.querySelector("#choice-b");
    removeSecondChoice.remove();

    var removeThirdChoice = document.querySelector("#choice-c");
    removeThirdChoice.remove();

    // save your score form
    var saveScoreForm = document.createElement("input");
    saveScoreForm.setAttribute("type", "text");
    saveScoreForm.setAttribute("placeholder", "Enter Your Initials");
    saveScoreForm.setAttribute("id", "enter-initials");
    document.querySelector("#form").appendChild(saveScoreForm);

    var saveScoreButton = document.createElement('button');
    saveScoreButton.className = "btn";
    saveScoreButton.textContent = "Save your score"
    saveScoreButton.setAttribute("type", "submit");
    saveScoreButton.setAttribute("id", "save-score");
    document.querySelector("#form-button").appendChild(saveScoreButton)

    let saveScoreBtnEl = document.querySelector("#save-score")
    saveScoreBtnEl.addEventListener("click", saveLocalStorage)

 };

 let saveLocalStorage = function() {

    var questionTitleEl = document.querySelector("#question-title");
    questionTitleEl.textContent = 'Thanks for playing!'

    var initials = document.getElementById('enter-initials');
    var getInitials = initials.value
    localStorage.setItem("initials", getInitials)

    var score = timeLeft
    localStorage.setItem("score", score)

    var viewHighScores = document.querySelector("#high-scores");
    viewHighScores.addEventListener("click", updateHighScores)
    
 }

 let updateHighScores = function() {

    var getInitials = localStorage.getItem('initials')
    var getHighScore = localStorage.getItem('score')

    var showHighScores = document.createElement("li")
    showHighScores.textContent = getInitials + ':' + getHighScore
    document.getElementById('high-scores-container').appendChild(showHighScores)

    
     // attach to clicking of high scores
 }




 // listening for the start button click to move to first question & start countdown
startQuizBtnEl.addEventListener("click", startQuiz);
// startQuizBtnEl.onclick = countdown;

