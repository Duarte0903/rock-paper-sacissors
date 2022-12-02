const plays = ["rock", "paper", "scissors"];

var userScore = 0;
var botScore = 0;

function randomChoice (plays) {
    var num = Math.floor(Math.random() * 3);
    return plays[num];
}

function result (userChoice, botChoice)
{
    var result;

    if (userChoice === "rock" && botChoice === "scissors") result = true;
    else if (userChoice === "rock" && botChoice === "paper") result = false;
    else if (userChoice === "rock" && botChoice === "rock") result = false;

    else if (userChoice === "paper" && botChoice === "paper") result = false;
    else if (userChoice === "paper" && botChoice === "rock") result = true;
    else if (userChoice === "paper" && botChoice === "scissors") result = false;

    else if (userChoice === "scissors" && botChoice === "scissors") result = false;
    else if (userChoice === "scissors" && botChoice === "rock") result = false;
    else if (userChoice === "scissors" && botChoice === "paper") result = true;

    return result;
}

function playAgain ()
{
    window.location.reload();
}

function updateUserScore (userScore)
{
    var scoreElement = document.getElementById ("userScore");
    scoreElement.innerHTML = "User core: " + userScore;
}

function updateBotScore (botScore)
{
    var scoreElement = document.getElementById ("botScore");
    scoreElement.innerHTML = "Bot score: " + botScore;
}

function playGame (userChoice) 
{
    var botChoice = randomChoice (plays);

    var gameResult = result (userChoice, botChoice);
    var showResult = document.getElementById("result");

    if (gameResult === true) 
    {
        showResult.innerHTML = "You win bot chose: " + botChoice;
        userScore++;
        updateUserScore (userScore);
    }

    else 
    {
        showResult.innerHTML = "You lose bot chose: " + botChoice;
        botScore++;
        updateBotScore (botScore);
    }
}

function getUserPlay (play)
{
    var userChoice;

    if (play === "rock") 
    {
        userChoice = "rock"; 
        playGame (userChoice);
    }
    else if (play === "paper") 
    {    
        userChoice = "paper"; 
        playGame (userChoice);
    }
    else if (play === "scissors") 
    {
        userChoice = "scissors"; 
        playGame (userChoice);
    }
}