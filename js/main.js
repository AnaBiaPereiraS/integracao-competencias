import {getAllQuestions} from './question.service.js';

var mock = [
    {
    questao: "1- Quantas linhas tem no logo do serviço de streaming de música Spotify?",
    respostas: {
        a: '2 linhas',
        b: '3 linhas',
        c: '4 linhas',
        d: '5 linhas'
    },
    'respostaCorreta': 'b'
    },

    {
    questao: "2- O sushi é um prato original de qual país?",
    respostas: {
        a: 'Tailândia',
        b: 'China',
        c: 'Japão',
        d: 'Corêia do Sul'
    },
    'respostaCorreta': 'c'
     },
    
     {
    questao: "3. Qual é o sobrenome mais comum no Brasil",
    respostas: {
        a: 'Silva',
        b: 'Santos',
        c: 'Sousa',
        d: 'Oliveira'
    },
    'respostaCorreta': 'a'
    },
];

window.onload = () => {
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

loadQuestions().then (questions => {console.log(questions)
    generateQuiz(mock, quizContainer, resultsContainer, submitButton);
});
}

const loadQuestions=() => {
return getAllQuestions().then(questions => {
    console.log('questions', questions)
    return questions;
})
}
function generateQuiz(questions, quizContainer, resultsContainer,submitButton){

    function showQuestions(questions,quizContainer){
var output = [];
var respostas;

for(var i=0; i<questions.length; i++){
respostas = [];

for(var letter in questions[i].respostas){
    respostas.push(
        '<label>'
        + '<input type="radio" name="questao'+i+'" value="'+letter+'">'
        + questions [i].respostas[letter]
        +'</label>'
    );
}
output.push(
    '<div class="questao">' + questions [i].questao + '</div>'
    + '<div class = "respostas">'+ respostas.join('') + '</div>'
);

}
    }
    quizContainer.innerHTML = output.join('');
}

function showResults(questions,quizContainer,resultsContainer){
var answerContainers = quizContainer.querySelectorAll('.respostas');
var userAnswer='';
var numCorrect=0;

userAnswer = (answerContainers[i].querySelector('input[name=questao'+i+']:checked') || {}).value;

if (userAnswer===questios[i].respostaCorreta){

numCorrect++;

answerContainers[i].style.color='lightgreen';
}

else {
    answerContainers[i].style.color = 'red';
}
resultsContainer.innerHTML = ` Acertou ${numCorrect} das ${questions.length} questoes.`;

showQuestions(questions, quizContainer);

submitButton.onclick = function(){
showResults (questions, quizContainer,resultsContainer);
}
}