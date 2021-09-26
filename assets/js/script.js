
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener('click',function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            }else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})
/**
 * The main game "loop", called wher the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "addition"){
        displayAdditionQuestion(num1,num2);
    }else if(gameType === "multiply"){
        displayMultiplyQuestion(num1,num2);
    }else if (gameType === "subtract"){
        displaySubtractQuestion(num1,num2);
    }else{
        alert(`Unknown game type: ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`
    }

}

function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let caluclatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === caluclatedAnswer[0];

    if(isCorrect){
        alert("You got it right")
        incrementScore();
    }else{
        alert(`The correct answer was ${caluclatedAnswer[0]}`)
        incrementWrongAnswer();
    }
}
/**
 * Gets the operands (the numbers) and the operator
 * Directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+"){
        return [operand1 + operand2, "addition"]
    }else if(operator === "*"){
        return [operand1 * operand2, "multiply"]
    }else if(operator === "-"){
        return [operand1 - operand2, "subtract"]
    }else{
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}`;
    }

}

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1
    document.getElementById('operand2').textContent = operand2
    document.getElementById('operator').textContent = "+"

}

function displaySubtractQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1
    document.getElementById('operand2').textContent = operand2
    document.getElementById('operator').textContent = "-"
}

function displayMultiplyQuestion(operand1,operand2){
    document.getElementById('operand1').textContent = operand1
    document.getElementById('operand2').textContent = operand2
    document.getElementById('operator').textContent = "*"


}