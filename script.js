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
let selectedAnswer = null;

// Load question
function loadQuestion() {
    let currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.style.backgroundColor = "#eee";
    });

    selectedAnswer = null;
}

optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedAnswer = button.textContent;
        optionButtons.forEach(btn => btn.style.backgroundColor = "#eee");
        button.style.backgroundColor = "lightgreen";

        console.log("Selected:", selectedAnswer);
    });
});

loadQuestion();