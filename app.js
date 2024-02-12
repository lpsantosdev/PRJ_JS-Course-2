let secretNumber = randomNumberGenerate();
let countAttempt = 1;

function showInfoScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

/*let titleH1 = document.querySelector("h1");
titleH1.innerHTML = "Secret Number Game";
let paragrapher1 = document.querySelector("p");
paragrapher1.innerHTML = "Welcome to the Secret Number Game, choose a number between 1 and 10."*/

function initialMessage() {
    showInfoScreen("h1", "Secret Number Game");
    showInfoScreen("p", "Welcome to this game, choose a number between 1 and 10.");
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
    return parseInt(Math.random() *10 + 1);
}

function clearField() {
    attempt = document.querySelector("input");
    attempt.value = "";
}

function restartGame() {
    let secretNumber = randomNumberGenerate();
    let countAttempt = 1;
    initialMessage();
    clearField();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}