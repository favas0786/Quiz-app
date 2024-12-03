const questions = [
    {
        question: "Which is largest animal in the world ?",
        answers: [
            { text:"Shark", correct:false },
            { text:"Blue whale", correct:true },
            { text:"Elephant", correct:false },
            { text:"Giraffe", correct:false },
        ]
    },
    {
        question: "Which is the smallest country in the world ?",
        answers: [
            { text:"Vatican city", correct:true },
            { text:"Bhutan", correct:false },
            { text:"Nepal", correct:false },
            { text:"Sri Lanka", correct:false },
        ]
    },
    {
        question: "Which is athe largest desert in the world ?",
        answers: [
            { text:"Kalahari", correct:false },
            { text:"Gobi", correct:true },
            { text:"Sahara", correct:false },
            { text:"Antarctica", correct:true },
        ]
    },
    {
        question: "Which is the smallest continent in the world ?",
        answers: [
            { text:"Asia", correct:false },
            { text:"Australia", correct:true },
            { text:"Arctic", correct:false },
            { text:"Africa", correct:false },
        ]
    }
];


const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestionIndex = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
}