let secretNumber = randomNumberGenerate();

function showInfoScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

/*let titleH1 = document.querySelector("h1");
titleH1.innerHTML = "Secret Number Game";
let paragrapher1 = document.querySelector("p");
paragrapher1.innerHTML = "Welcome to the Secret Number Game, choose a number between 1 and 10."*/

showInfoScreen("h1", "Secret Number Game");
showInfoScreen("p", "Welcome to this game, choose a number between 1 and 10.");

function checkNumber() {
    let attempt = document.querySelector("input").value;
    if(attempt == secretNumber){
        showInfoScreen("h1","Congratulations!");
        showInfoScreen("p", "You discovered the secret number");
    } else {
        if (attempt > secretNumber){
        showInfoScreen("h1", "You missed");
        showInfoScreen("p", "The Secret Number is smaller");
    } else {
        showInfoScreen("h1", "You missed");
        showInfoScreen("p", "The Secret Number is greater");
    }
}
}

function randomNumberGenerate() {
    return parseInt(Math.random() *10 + 1);
}