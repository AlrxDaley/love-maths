
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener('click',function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("you clicked Submit")
            }else {
                let gameType = this.getAttribute("data-type");
                alert(`you clicked ${gameType}`);
            }
        })
    }
})
/**
 * The main game "loop", called wher the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(){
    let num1 = matrh.floor(math.random() * 25) + 1;
    let num2 = matrh.floor(math.random() * 25) + 1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function imcrementWrongAnswer(){

}

function displayAddiriopnQuestion(){

}

function displaySubtrectQuestion(){

}

function displayMultiplyQuestion(){

}