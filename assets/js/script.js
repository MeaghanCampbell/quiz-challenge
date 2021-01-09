// selecting the start button to click
let startQuizBtnEl = document.querySelector("#start-quiz");

// Question Array
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
        choiceC: "Square Brackets []",
    },
    {
        question: "Which of the following is not a data type used in JavaScript?",
        choiceA: "Boolean",
        choiceB: "Signal",
        choiceC: "String",
    },
    {
        question: "How do you create a function in JavaScript?",
        choiceA: "var functionName = function() { functionCode }",
        choiceB: "var functionName = (function) [ functionCode ]",
        choiceC: "function : functionName ( functionCode )",
    }
];

// Array with correct answers
let questOneCorrect = questions[0].choiceA;
let questTwoCorrect = questions[1].choiceC;
let questThreeCorrect = questions[2].choiceA

// function to start the quiz
let startQuiz = function (event) {

    // targets the start button
    var targetEl = event.target;

    if (targetEl.matches(".btn")) {
        runFirstQuestion();
    }
}

let runFirstQuestion = function () {

    // remove start button and paragraph text
    var startParaText = document.querySelector("#start-paragraph")
    startParaText.textContent = '';

    var removeStartButton = document.querySelector("#start-btn");
    removeStartButton.remove();
    
    // select question title and add text from questions array
    var questionTitleEl = document.querySelector("#question-title");
    questionTitleEl.textContent = questions[0].question

    // create choice A
    var choiceOneEl = document.createElement("button");
    choiceOneEl.textContent = questions[0].choiceA
    choiceOneEl.className = "btn";
    choiceOneEl.setAttribute("id", "choice-content");
    document.getElementById("choices").appendChild(choiceOneEl);

    // create choice B
    var choiceTwoEl = document.createElement("button");
    choiceTwoEl.textContent = questions[0].choiceB
    choiceTwoEl.className = "btn";
    choiceTwoEl.setAttribute("id", "choice-content");
    document.getElementById("choices").appendChild(choiceTwoEl);

    // create choice C
    var choiceThreeEl = document.createElement("button");
    choiceThreeEl.textContent = questions[0].choiceC
    choiceThreeEl.className = "btn";
    choiceThreeEl.setAttribute("id", "choice-content");
    document.getElementById("choices").appendChild(choiceThreeEl);
    
    nextQuestion();

}

let nextQuestion = function (event) {

    // targets second button question choice
    var targetQ = event.target;

    if (targetQ.matches(".btn")) {
        runNextQuestion();
    }
}

let runNextQuestion = function () {
    // select question title and add text from questions array
    
    var secondQuestionTitleEl = document.querySelector("#question-title");
    secondQuestionTitleEl.textContent = questions[1].question

    // create choice A
    var secondChoiceOneEl = document.querySelector("#choice-content");
    secondChoiceOneEl.textContent = questions[1].choiceA
    document.getElementById("choices").appendChild(secondChoiceOneEl);

    // create choice B
    var secondChoiceTwoEl = document.querySelector("#choice-content");
    secondChoiceTwoEl.textContent = questions[1].choiceB
    document.getElementById("choices").appendChild(secondChoiceTwoEl);

    // create choice C
    var secondChoiceThreeEl = document.querySelector("#choice-content");
    secondChoiceThreeEl.textContent = questions[1].choiceC
    document.getElementById("choices").appendChild(secondChoiceTwoEl);

}




// let them know answer is correct with function?

// listening for second question button click to move to last
startQuizBtnEl.addEventListener("click", nextQuestion);

// listening for the start button click to move to first question
startQuizBtnEl.addEventListener("click", startQuiz);

  
