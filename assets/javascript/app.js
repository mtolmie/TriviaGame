var timer = 0;
var answerList = [
      "Top Gun",
      "E.T."
    ];
var chosenAnswer = "";
var numGuesses = 1;
var frustration;
var triviaQuestions = [];
var wrongGuesses = [];
var rightGuesses = [];
var numBlanks = 0;
function startGame() {
	counter = 0;
	console.log("Button clicked and Game started");
	timer();
	checkAnswer();

	triviaQuestions = [];
	wrongGuesses = [];
	rightGuesses = [];
	document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}
function timer() {
	setTimeout(twentyFiveSeconds, 1000 * 25);
	function twentyFiveSeconds() {
		$("#timeup").html("<h2> Times Up!</h2>");
	}
	
	function timeUp() {
		console.log("done");
	  	$("#time-left").append("<h2>Time's Up!</h2>");
	  	console.log("time is up");
	}
	
}

function startTimer(duration, display) {
    var timer = duration, seconds;
   frustration = setInterval(function () {
        seconds = parseInt(timer % 25);
        seconds = seconds < 25 ? "0" + seconds : seconds;
	display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};

window.onload = function () {
    var seconds = 1000 * 25,
        display = document.querySelector('#time');
    startTimer(seconds, display);
};

      //  Once number hits zero...
      if (timer === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Times Up!");
      }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(frustration);
  };
 

function checkAnswers() {
	document.onkeyup = function(event){
		var question1 = "Tom Cruise";
		var question2 = "E.T.";
	}

// if (question1 == Tom Cruise) {question1 = "Tom Cruise"};
// if (question2 == E.T.) {question2 = "E.T."};
// document.getElementById("question1").innerHTML = question1; 
// document.getElementById("question2").innerHTML = question2; 

var counter = 0;
var rightGuesses= 0;
var wrongGuesses = 0;


if (counter === rightGuesses) {
       winCounter++
       $("#wins").text(winCounter + "");

 } else if (counter > wrongGuesses) {
        lossCounter++
       $("#losses").text(lossCounter);
	}
};
 





// for each of my questions, going to have the answer and going to need to use the onkeyup event to figure out which answer the user selected
// throw that into a var to work with it 
// check to see if it has an attribute of class with the value of correct 
// if yes, increment the correct answer counter 








// 



