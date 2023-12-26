import {handleErrors} from "./exceptions.js"

const URL ='http://localhost:3000/questions';

export const getAllQuestions = async () =>{
    try {
        const resposta = await fetch(URL);
        handleErrors(resposta);
        return resposta.json();
    } catch(error) {
        console.log('Resposta Errada', error)
    }
};