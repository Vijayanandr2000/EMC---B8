let user = {};
let currentQuestionIndex = 0;
let score = 0;
let timer;
let allQuestions = [];
let selectedQuestions = [];
let userAnswers = [];

document.addEventListener('DOMContentLoaded', function () {
    loadPage('landing.html');
    fetch('questions.json')
        .then(response => response.json())
        .then(data => allQuestions = data);
});

function loadPage(page) {
    fetch(`pages/${page}`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            initializePage(page);
        });
}

function initializePage(page) {
    if (page === 'landing.html') {
        document.getElementById('user-details-form').addEventListener('submit', function (e) {
            e.preventDefault();
            user.name = document.getElementById('name').value;
            user.email = document.getElementById('email').value;
            loadPage('instructions.html');
        });
    } else if (page === 'instructions.html') {
        document.getElementById('start-quiz-button').addEventListener('click', startQuiz);
    } else if (page === 'quiz.html') {
        document.getElementById('next-button').addEventListener('click', function () {
            const selectedAnswer = document.querySelector('input[name="answer"]:checked');
            if (selectedAnswer) {
                userAnswers[currentQuestionIndex] = parseInt(selectedAnswer.value);
                if (userAnswers[currentQuestionIndex] === selectedQuestions[currentQuestionIndex].correct) {
                    score++;
                }
                if (currentQuestionIndex < 9) {
                    currentQuestionIndex++;
                    showQuestion();
                } else {
                    endQuiz();
                }
            } else {
                alert("Please select an answer.");
            }
        });
        startTimer(300);  // Adjust the time limit as needed
        showQuestion();
    } else if (page === 'result.html') {
        const resultMessage = document.getElementById('result-message');
        resultMessage.textContent = `You scored ${score} out of 10.`;
        showAnswers();
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    selectedQuestions = selectRandomQuestions(allQuestions, 10);
    loadPage('quiz.html');
}

function showQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <p>Question ${currentQuestionIndex + 1}: ${question.question}</p>
        ${question.answers.map((answer, index) => `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${answer}
            </label>
        `).join('')}
    `;
}

function startTimer(seconds) {
    const timerElement = document.getElementById('time-left');
    updateTimerDisplay(seconds);

    timer = setInterval(function () {
        seconds--;
        updateTimerDisplay(seconds);
        if (seconds <= 0) {
            clearInterval(timer);
            endQuiz();
        }

    }, 1000);
}

function updateTimerDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    const timerElement = document.getElementById('time-left');
    timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function endQuiz() {
    clearInterval(timer);
    loadPage('result.html');
}

function showAnswers() {
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = selectedQuestions.map((question, index) => `
        <div>
            <p>Question ${index + 1}: ${question.question}</p>
            ${question.answers.map((answer, i) => {
        let color = 'black';
        if (i === question.correct) {
            color = 'green';
        } else if (i === userAnswers[index]) {
            color = 'red';
        }
        return `
                    <p style="color: ${color}">
                        ${answer}
                    </p>
                `;
    }).join('')}
        </div>
    `).join('');
}

function selectRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
