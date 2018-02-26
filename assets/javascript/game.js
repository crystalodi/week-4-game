//When the page is done loading
$(document).ready(function(){
    //Define variables that keep track of amount of wins and losses to display to user.
    var winCount = 0;
    var lossCount = 0;
    //Define variable that keeps track of score.
    var currentScore, scoreToWin;
    startGame()
    $(".crystal-container").on("click", function(){
		//Each time a crystal is clicked add crystal score to user's current score and update field
        var crystalScore = parseInt($(this).attr("value"));
        currentScore += crystalScore;
        $("#yourScore").html(currentScore);
        if(currentScore === scoreToWin) {
            //You Win
            winCount++;
            $("#numWins").html(winCount);
            startGame();
        }
        else {
			if(currentScore > scoreToWin) {
				//You lose
				lossCount++;
				$("#numLoss").html(lossCount);
				startGame();
			}
        }
    });
    function startGame() {
		//call randomScore to get a new value for each crystal and the score player has to match in order to win.
        $("#red").attr("value", randomScore(1, 12))
        $("#blue").attr("value", randomScore(1, 12));
        $("#orange").attr("value", randomScore(1, 12));
        $("#green").attr("value", randomScore(1, 12));
        scoreToWin = randomScore(19, 120);
        $("#scoreToMatch").html(scoreToWin);
		//Reset users current score to 0 each time the game is played.
        currentScore = 0;
        $("#yourScore").html(currentScore);
    }
    function randomScore(min, max) {
        min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});