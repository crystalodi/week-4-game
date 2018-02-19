//When the page is done loading
$(document).ready(function(){
    //Define variable that determine whether or not the game has started.
    var gameStarted = false;
    //Define variables that keep track of amount of wins and losses to display to user.
    var winCount = 0;
    var lossCount = 0;
    //Define variable that keeps track of score.
    var currentScore = 0;
    //Define a random number for each crystal, which will be the score.
    var rubyScore = randomScore(1, 12);
    var diamondScore = randomScore(1, 12);
    var topazScore = randomScore(1, 12);
    var emeraldScore = randomScore(1, 12);
    //Define a random number which will be the total score to be below or tie with.
    var scoreToWin = randomScore(19, 120)

    console.log("Ruby Score: " + rubyScore);
    console.log("Diamond Score: " + diamondScore);
    console.log("Topaz Score: " + topazScore);
    console.log("Emerald Score: " + emeraldScore);
    console.log("Score to Win: " + scoreToWin);

    function randomScore(min, max) {
        //Calculates a random number to be score for each crystal and generates random score to tie or be lower than;
        return Math.floor(Math.random() * (max - 1) + min); 
    }
});