import { getAllQuestions } from './question.service.js';

window.onload = () => {
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    loadQuestions().then(questions => {
        generateQuiz(questions, quizContainer, resultsContainer, submitButton);
    });
}

const loadQuestions = () => {
    return getAllQuestions().then(questions => {
        return questions;
    })
}

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        var output = [];
        var respostas;

        for (var i = 0; i < questions.length; i++) {
            respostas = [];

            for (var letter in questions[i].respostas) {
                respostas.push(
                    '<label>'
                    + '<input type="radio" name="questao' + i + '" value="' + letter + '">'
                    + questions[i].respostas[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="questao">' + questions[i].questao + '</div>'
                + '<div class = "respostas">' + respostas.join('') + '</div>'
            );

        }
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        var answerContainers = quizContainer.querySelectorAll('.respostas');
        var userAnswer = '';
        var numCorrect = 0;

        for (var i = 0; i < questions.length; i++) {

            userAnswer = (answerContainers[i].querySelector('input[name=questao' + i + ']:checked') || {}).value;

            if (userAnswer === questions[i].respostaCorreta) {

                numCorrect++;

                answerContainers[i].style.color = 'lightgreen';
            }

            else {
                answerContainers[i].style.color = 'red';
            }

            resultsContainer.innerHTML = ` Acertou ${numCorrect} das ${questions.length} questoes.`;

        }
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}
