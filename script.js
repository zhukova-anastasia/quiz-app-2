const questData = [{
    question: "What does HTML stand for?",
    a: "Hyper Trainer Marking Language",
    b: "Hyper Text Marketing Language",
    c: "Hyper Text Markup Language",
    d: "Hyper Text Markup Leveler",
    correct: "c"
}, {
    question: "Which of the following is the correct way of making a string in Java?",
    a: 'String "Text"',
    b: "String text = 'text';",
    c: 'String text = "text"',
    d: 'String text = "text";',
    correct: "a"
}, {
    question: "What is the most used programming language in 2020?",
    a: 'Java',
    b: "Python",
    c: 'JavaScript',
    d: 'TypeScript',
    correct: "a"
}
]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const quest = document.querySelector(".quest-title");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuestionData = questData[currentQuiz]

    quest.innerText = currentQuestionData.question;
    aText.innerText = currentQuestionData.a;
    bText.innerText = currentQuestionData.b;
    cText.innerText = currentQuestionData.c;
    dText.innerText = currentQuestionData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', function () {
    const answer = getSelected();
    if (answer === questData[currentQuiz].correct) {
        score++;
    }
    if (answer) {
        currentQuiz++;
        if (currentQuiz < questData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${questData.length} questions.</h2>`
        }
    }
})