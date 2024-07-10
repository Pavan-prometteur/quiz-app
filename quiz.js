import { mcqs } from "./addmcq.js";

let mcqListHTML = "";
let score = 0;

mcqs.forEach(function (q1, index) {
    const { Q, a, b, c, d } = q1;
    let questions = `<div class="mcqList">
    <label>${Q}</label><br><br>
    <input type="radio" name="ans${index}" value="${a}">
    <label>${a}</label><br><br>
    <input type="radio" name="ans${index}" value="${b}">
    <label>${b}</label><br><br>
    <input type="radio" name="ans${index}" value="${c}">
    <label>${c}</label><br><br>
    <input type="radio" name="ans${index}" value="${d}">
    <label>${d}</label><br></br>
    </div>`;

    mcqListHTML += questions;
});

let page = document.querySelector('.mcq');
page.innerHTML = mcqListHTML + `<br><button type="button" onclick=${getAllAnswers()}>Submit</button>`;

function getAllAnswers() {
    let eachMcq = document.getElementsByClassName('mcqList');
    
    for (let i = 0; i < eachMcq.length; i++) {
        let radioButtons = eachMcq[i].querySelectorAll('input[type="radio"]');
        console.log(radioButtons);
        let selectedValue = null;

        for (let j = 0; j < radioButtons.length; j++) {
            if (radioButtons[j].checked) {
                selectedValue = radioButtons[j].value;
                break;
            }
        }

        let correctAnswer = mcqs[i].correctAnswer;

        if (selectedValue !== null) {
            console.log('Question ' + (i + 1) + ': Selected Value = ' + selectedValue);
            if (selectedValue === correctAnswer) {
                score++;
            }
        } else {
            console.log('Question ' + (i + 1) + ': No option selected');
        }
    }
    
    console.log('Your score is: ' + score + '/' + mcqs.length);
}