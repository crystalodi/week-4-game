//When the page is done loading
$(document).ready(function(){
    //Define variables that keep track of amount of wins and losses to display to user.
    var winCount = 0;
    var lossCount = 0;
    //Define variable that keeps track of score.
    var currentScore, scoreToWin;
    startGame()
    $(".crystal-image").on("click", function(){
        var crystalScore = parseInt($(this).attr("value"));
        currentScore += crystalScore;
        $("#yourScore").html(currentScore);
        if(currentScore === scoreToWin) {
            //You Win
            winCount++;
            $("#numWins").html(winCount)
            startGame()
        }
        else if(currentScore > scoreToWin) {
            //You lose
            lossCount++
            $("#numLoss").html(lossCount)
            startGame()
        }
        else {
            //keep playing
        }
    });
    function startGame() {
        $("#red").attr("value", randomScore(1, 12))
        $("#blue").attr("value", randomScore(1, 12));
        $("#orange").attr("value", randomScore(1, 12));
        $("#green").attr("value", randomScore(1, 12));
        scoreToWin = randomScore(19, 120);
        $("#scoreToMatch").html(scoreToWin);
        currentScore = 0;
        $("#yourScore").html(currentScore);
    }
    function randomScore(min, max) {
        //Calculates a random number to be score for each crystal and generates random score to tie or be lower than;
        return Math.floor(Math.random() * (max - 1) + min); 
    }
});