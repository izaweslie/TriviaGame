var startScreen;
//undefined variable to ducument game HTML
var gameHTML;
//timer to count down from 
var counter = 15;
//undefined variable for timer
var theClock;
//create questions
var questionsArray = ["The beaver is the national emblem of which country?",  "What is it illegal to duel with in Massachusetts?", "Fifteen percent of women do what on Valentine’s Day?"];
//create answers
var correctAnswerArray = ["Canada", "Water Pistols", "Send themselves Flowers"];
//create choices
var choicesArray = [["Canada", "USA", "Denmark", "Greenland"],["Pocket Knives", "Light Sabers", "Cucumbers", "Water Pistols"], ["Watch Ellen Degeneres", "Send themselves chocolate", "Send themselves flowers", "Go on blind dates"]];
//variable to switch from question to next question
var questionCounter = 0;
//undefined variable for TBD
var selectorAnswer;
//players responses (user scores)
var correctAnswer = 0;
var wrongAnswer = 0;
var noChoice = 0;

//create functions for buttons
$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");
		clearInterval(theClock);
		addPoint();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		noPoint();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); // Closes reset-button click

//});  //  Closes jQuery wrapper




//countdown for each questions
function timer() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			noChoiceNoScore();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}
//create go to next question timer(s)
//what happens when no answer is chosen? 
function noChoiceNoScore() {
	noChoice++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswerArray[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 20000);  //  pause between questions
}
//what happens when correct answer is chosen? 
function addPoint() {
	correctAnswer++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswerArray[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 20000);  //  pause between questions
}
//what happens when wrong answer is chosen? 
function noPoint() {
	wrongAnswer++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswerArray[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 20000); //  pause between questions
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionsArray[questionCounter] + "</p><p class='first-answer answer'>A. " + choicesArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+choicesArray[questionCounter][2]+"</p><p class='answer'>D. "+choicesArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

//THE END
function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctAnswer + "</p>" + "<p>Wrong Answers: " + wrongAnswer + "</p>" + "<p>Unanswered: " + noChoice + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Play again!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctAnswer = 0;
	wrongAnswer = 0;
	noChoice = 0;
	counter = 30;
	generateHTML();
	timer();
}