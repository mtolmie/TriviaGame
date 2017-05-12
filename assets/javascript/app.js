var timer = 0;
var chosenWord = "";
var frustration;
function startGame() {
	counter = 0;
	console.log("Button clicked and Game started");
	timer();
	checkAnswer();

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
    frustration = setInterval(function () { 
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 25);
        seconds = seconds < 25 ? "0" + seconds : seconds;
	display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
});

window.onload = function () {
    var seconds = 1000 * 25,
        display = document.querySelector('#time');
    startTimer(seconds, display);
};

		}
      //  Once number hits zero...
      if (timer === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(frustration);
 

    //  Execute the run function.
    










// function checkAnswer() {
// document.onkeyup = function(event) {




// for each of my questions, going to have the answer and going to need to use the onkeyup event to figure out which answer the user selected
// throw that into a var to work with it 
// check to see if it has an attribute of class with the value of correct 
// if yes, increment the correct answer counter 





// $( "#dataTable tbody tr" ).on( "click", function() {
//   console.log( $( this ).text() );
// $(document).ready(function() {
// 	$("#start").on("click", function(){
// 		startGame();
// 	});
// });




// document.getElementById("form1").onsubmit=function() {
//        variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
// 	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
// 	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
// 	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
// 	document.getElementById("grade").innerHTML = result;
	   
// var result 

// return false; // required to not refresh the page; just leave this here
// } //this ends the submit function

// if (result == 25) {result1 = "Tom Cruise."};
// if (result == 50) {result2 = "E.T."};
// document.getElementById("grade2").innerHTML = result2; 

// var counter = 0;
//     var correctCounter = 0;
//     var incorrectCounter = 0;


// document.getElementById("grade2").innerHTML = result2; 

// if (counter === correctCounter) {
//         winCounter++
//         $("#wins").text(winCounter + "");
// // I added the init function to reset the numbers and start again    
//         init();

//     } else if (counter > incorrectCounter) {
//         lossCounter++
//         $("#losses").text(lossCounter);

 
 
    // $("#current-total").text(counter);




