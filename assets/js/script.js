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

    if (targetEl.matches("#start-btn")) {
        runFirstQuestion();
    }
}

// run first question
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
    choiceOneEl.setAttribute("id", "first-choice");
    document.getElementById("choices").appendChild(choiceOneEl);

    // create choice B
    var choiceTwoEl = document.createElement("button");
    choiceTwoEl.textContent = questions[0].choiceB
    choiceTwoEl.className = "btn";
    choiceTwoEl.setAttribute("id", "second-choice");
    document.getElementById("choices").appendChild(choiceTwoEl);

    // create choice C
    var choiceThreeEl = document.createElement("button");
    choiceThreeEl.textContent = questions[0].choiceC
    choiceThreeEl.className = "btn";
    choiceThreeEl.setAttribute("id", "third-choice");
    document.getElementById("choices").appendChild(choiceThreeEl);


    let firstAnswerClick = document.querySelector("#first-choice")
    let secondAnswerClick = document.querySelector("#second-choice")
    let thirdAnswerClick = document.querySelector("#third-choice")
    firstAnswerClick.addEventListener("click", runNextQuestion);
    secondAnswerClick.addEventListener("click", runNextQuestion);
    thirdAnswerClick.addEventListener("click", runNextQuestion);


}

// run second question
let runNextQuestion = function () {

    // select question title and add text from questions array
    
    var secondQuestionTitleEl = document.querySelector("#question-title");
    secondQuestionTitleEl.textContent = questions[1].question

    // create choice A
    var secondChoiceOneEl = document.querySelector("#first-choice");
    secondChoiceOneEl.textContent = questions[1].choiceA
    document.getElementById("choices").appendChild(secondChoiceOneEl);

    // create choice B
    var secondChoiceTwoEl = document.querySelector("#second-choice");
    secondChoiceTwoEl.textContent = questions[1].choiceB
    document.getElementById("choices").appendChild(secondChoiceTwoEl);

    // create choice C
    var secondChoiceThreeEl = document.querySelector("#third-choice");
    secondChoiceThreeEl.textContent = questions[1].choiceC
    document.getElementById("choices").appendChild(secondChoiceThreeEl);

    let firstAnswerClick = document.querySelector("#first-choice")
    let secondAnswerClick = document.querySelector("#second-choice")
    let thirdAnswerClick = document.querySelector("#third-choice")
    firstAnswerClick.addEventListener("click", runLastQuestion);
    secondAnswerClick.addEventListener("click", runLastQuestion);
    thirdAnswerClick.addEventListener("click", runLastQuestion);


}

// run last question
let runLastQuestion = function () {

    // select question title and add text from questions array
    
    var thirdQuestionTitleEl = document.querySelector("#question-title");
    thirdQuestionTitleEl.textContent = questions[2].question

    // create choice A
    var thirdChoiceOneEl = document.querySelector("#first-choice");
    thirdChoiceOneEl.textContent = questions[2].choiceA
    document.getElementById("choices").appendChild(thirdChoiceOneEl);

    // create choice B
    var thirdChoiceTwoEl = document.querySelector("#second-choice");
    thirdChoiceTwoEl.textContent = questions[2].choiceB
    document.getElementById("choices").appendChild(thirdChoiceTwoEl);

    // create choice C
    var thirdChoiceThreeEl = document.querySelector("#third-choice");
    thirdChoiceThreeEl.textContent = questions[2].choiceC
    document.getElementById("choices").appendChild(thirdChoiceThreeEl);

}


// let them know answer is correct with function?
let checkAnswer = function() {

}

// listening for the start button click to move to first question
startQuizBtnEl.addEventListener("click", startQuiz);

  
