const questions = [
    {
        question: "What is 2 + 2?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "Which language runs in the browser?",
        options: ["Python", "Java", "C", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Markup Language",
            "Hyper Text Marketing Language",
            "Hyper Tool Multi Language"
        ],
        answer: "Hyper Text Markup Language"
    }
];

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");

let currentQuestionIndex = 0;

function loadQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    console.log(currentQuestion);
    questionElement.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
    });
}

loadQuestion();