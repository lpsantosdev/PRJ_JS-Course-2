let sortNumbers = [];
let numberListLimit = 100;
let secretNumber = randomNumberGenerate();
let countAttempt = 1;

function showInfoScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    responsiveVoice.speak(text, "UK English Female", {rate: 1.2});
}

function initialMessage() {
    showInfoScreen("h1", "Secret Number Game");
    showInfoScreen("p", `Welcome to this game, choose a number between 1 and ${numberListLimit}.`);
}

initialMessage();

function checkNumber() {
    let attempt = document.querySelector("input").value;
    if(attempt == secretNumber){
        showInfoScreen("h1","Congratulations!");
        let attemptWord = countAttempt > 1 ? "attempts": "attempt";
        let messageAttempt = `You discovered the secret number with ${countAttempt} ${attemptWord}`;
        showInfoScreen("p", messageAttempt);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (attempt > secretNumber){
        showInfoScreen("h1", "You missed...");
        showInfoScreen("p", "The Secret Number is smaller");
    } else {
        showInfoScreen("h1", "You missed...");
        showInfoScreen("p", "The Secret Number is greater");
    }
    countAttempt++;
    clearField();
}
}

function randomNumberGenerate() {
    let numberGenerated = parseInt(Math.random() *numberListLimit + 1);
    let sortNumbersLength = sortNumbers.length;
    if  (sortNumbersLength == numberListLimit){
        sortNumbers = [];
    }
    if (sortNumbers.includes(numberGenerated)){
        return randomNumberGenerate();
    }else {
        sortNumbers.push(numberGenerated);
        return numberGenerated
    }
}

function clearField() {
    attempt = document.querySelector("input");
    attempt.value = "";
}

function restartGame() {
    secretNumber = randomNumberGenerate();
    countAttempt = 1;
    initialMessage();
    clearField();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}