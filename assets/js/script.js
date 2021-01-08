// selecting the start quiz button parent element from the DOM
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

// function to start the quiz
let startQuiz = function (event) {

    // targets the start button
    var targetEl = event.target;

    if (targetEl.matches(".btn")) {
        console.log('start quiz', targetEl);
        runQuestions();
    }
}

let runQuestions = function () {
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

    // how to loop through questions & target all buttons?

    /* for (i = 0; i < questions.length; i++) {
        i += questions.question[i] 
    } */

}

// let them know answer is correct with function?


// listening for the start button click
startQuizBtnEl.addEventListener("click", startQuiz);
  
