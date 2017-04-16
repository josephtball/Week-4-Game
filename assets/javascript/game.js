// set DOM variables
var $play = $("#play");
var $playAgain = $("#play-again");
var $reset = $("#reset");
var $goal = $("#goal");
var $crystal1 = $("#crystal1");
var $crystal2 = $("#crystal2");
var $crystal3 = $("#crystal3");
var $crystal4 = $("#crystal4");
var $guess = $("#guess");
var $win = $("#win");
var $lose = $("#lose");
var $alert = $(".alert");

// set variables
var goal = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var guess = 0;
var win = 0;
var lose = 0;
var run = false;

function getGoal() {
	goal = Math.floor(Math.random() * 101) + 19;
	$goal.html(goal);
}

function crystalRandom() {
	crystal1 = Math.floor(Math.random() * 12) + 1;
	crystal2 = Math.floor(Math.random() * 12) + 1;
	crystal3 = Math.floor(Math.random() * 12) + 1;
	crystal4 = Math.floor(Math.random() * 12) + 1;
}

function crystalGuess() {
	$crystal1.on("click", function() {
		if (run) {
			guess += crystal1;
			$guess.html(guess);
			checkWin();
		}
	});
	$crystal2.on("click", function() {
		if (run) {
			guess += crystal2;
			$guess.html(guess);
			checkWin();
		}
	});
	$crystal3.on("click", function() {
		if (run) {
			guess += crystal3;
			$guess.html(guess);
			checkWin();
		}
	});
	$crystal4.on("click", function() {
		if (run) {
			guess += crystal4;
			$guess.html(guess);
			checkWin();
		}
	});
}

function checkWin() {
	if (guess == goal) {
		run = false;
		win++
		$win.html(win);
		$alert.append("<h2>You Win!</h2>");
	} else if (guess > goal) {
		run = false;
		lose++
		$lose.html(lose);
		$alert.append("<h2>You Lose!</h2>");
	}
}

function game() {
	run = true;
	guess = 0;
	getGoal();
	crystalRandom();
}

crystalGuess();

$play.on("click", function() {
	$playAgain.removeClass("hide");
	$reset.removeClass("hide");
	$play.addClass("hide");
	game();
});

$playAgain.on("click", function() {
	$guess.html("");
	$alert.empty();
	game();
});

$reset.on("click", function() {
	win = 0;
	$win.html(win);
	lose = 0;
	$lose.html(lose);
	$goal.html("");
	$guess.html("");
	$alert.empty();
	$play.removeClass("hide");
	$playAgain.addClass("hide");
	$reset.addClass("hide");
});