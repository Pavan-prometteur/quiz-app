import { mcqs } from "./addmcq.js";

let score = 0;
let currentQuestion = 0;

function showQuestion() {
    const { Q, a, b, c, d } = mcqs[currentQuestion];
    const questions = `
        <div class="mcqList">
            <label>Q.${Q}</label><br><br>
            <input type="radio" name="ans${currentQuestion}" value=${a}>
            <label>${a}</label><br><br>
            <input type="radio" name="ans${currentQuestion}" value=${b}>
            <label>${b}</label><br><br>
            <input type="radio" name="ans${currentQuestion}" value=${c}>
            <label>${c}</label><br><br>
            <input type="radio" name="ans${currentQuestion}" value=${d}>
            <label>${d}</label><br><br>
        </div>`;

    const page = document.querySelector('.mcq');
    page.innerHTML = questions;
    document.querySelector(".page-no").innerHTML=`<p>${currentQuestion+1}/${mcqs.length}</p>`;

    const radioButtons = page.querySelectorAll(`input[name="ans${currentQuestion}"]`);
    radioButtons.forEach(radio => {
        radio.addEventListener('click', () => checkAnswer(radio.value));
    });
}

function checkAnswer(selected) {
    const correctAnswer = mcqs[currentQuestion].correctAnswer;
    if (selected === correctAnswer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < mcqs.length) {
        showQuestion();
    } else {
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = `<p style="font-size: 30px; color: blue; font-weight: bold; text-align: center; margin-top: 50px">You got ${score} out of ${mcqs.length} questions.</p>`;
    }
}

showQuestion();