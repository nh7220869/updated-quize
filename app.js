document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById("startButton");
    var quizContainer = document.getElementById("quizContainer");
    var resultContainer = document.getElementById("resultContainer");
    var scoreElement = document.getElementById("score");
    var score = 0;
    var questionIndex = 0;
    var questions = [
        {
            question: "Which keyword is used to declare a variable with a specific type in TypeScript?",
            choices: ["var", "let", "const", "type"],
            correctAnswer: "let",
        },
        {
            question: "The author of The Power Of Now is?",
            choices: ["Charles Dickens", "Tara Westover", "Don Miguel Ruiz", "Eckhart Tolle"],
            correctAnswer: "Eckhart Tolle",
        },
        {
            question: "What is the chemical equation of water?",
            choices: ["H2O", "NaCl", "CO", "CO2"],
            correctAnswer: "H2O",
        },
        {
            question: "What is the largest ocean on Earth?",
            choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            correctAnswer: "Pacific Ocean",
        },
        {
            question: "Who was the first person to step on the Moon?",
            choices: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
            correctAnswer: "Neil Armstrong",
        },
        {
            question: "Who is the richest man in the world?",
            choices: ["Elon Musk", "Jeff Bezos", "Bernard Arnault", "Mark Zuckerberg"],
            correctAnswer: "Elon Musk",
        },
    ];
    // Function to load and display the question
    function loadQuestion() {
        // Check if we are done with all questions
        if (questionIndex >= questions.length) {
            quizContainer.style.display = "none";
            resultContainer.style.display = "block";
            scoreElement.textContent = "".concat(score, "/").concat(questions.length);
            return;
        }
        // Display current question
        var currentQuestion = questions[questionIndex];
        var questionElement = document.getElementById("question");
        questionElement.textContent = currentQuestion.question;
        // Clear previous choices
        var choicesElement = document.getElementById("choices");
        choicesElement.innerHTML = "";
        // Display the new choices as buttons
        currentQuestion.choices.forEach(function (choice) {
            var button = document.createElement("button");
            button.className = "choiceButton";
            button.textContent = choice;
            button.onclick = function () {
                if (choice === currentQuestion.correctAnswer) {
                    score++;
                }
                questionIndex++;
                loadQuestion();
            };
            choicesElement.appendChild(button);
        });
    }
    // Start quiz event listener
    startButton.addEventListener("click", function () {
        startButton.style.display = "none"; // Hide start button
        quizContainer.style.display = "block"; // Show quiz container
        loadQuestion(); // Load the first question
    });
});
