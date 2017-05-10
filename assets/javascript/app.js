
 
  var obth = this;       // stores the object contained in 'this'
  var objfiles = {};     // stores the object with "category":"file_name" elements, received in setCateg()
  var round = 'round1';  // 'level1' with variant of answers, 'level2' with text field to write the answer
  var stopct = 0;        // if not 0, countdown-timer not continue, in startCT()
  var ctsec = 15;         // number of seconds for each quiz
  var nquizzes = 0;      // total number of quizzes
  var nquiz = 0;         // stores number of current quiz
  var nca = 0;          // number of correct answers
  var nia = 0;
  var unanswered =0;          // number of unanswered questions

  // trivia mode ('qindex' = gets the quiz from next index, 'qrandom' = gets the quiz with index randomly from "iquizzes")
  var qmode = 'qindex';
  var iquizzes = [];       // array with indexes of quizzes that must to get randomly

  // property /array stores the trivia elements ('que'=question, 'ca'=correct answer, 'ia'=array with incorrect answers)
var questions = [];
var myVar = setInterval(timer, 1000);


for (var i = 0; i < round; i++) {
    questions.push("_");
  }

(function() {
  var questions = [{
    question: "What movie in 1986 features a navial aviator with a call sign of Maverick?",
    var choices = ["Top Gun," "Iron Eagle," "Rocky"],
    correctAnswer: Top Gun
  }, {


  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object

//Store the total number of questions
var totalQuestions = $('.questions').size();

//Set the current question to display to 1
var currentQuestion = 0;

//Store the selector in a variable.
//It is good practice to prefix jQuery selector variables with a $
$questions = $('.questions');

//Hide all the questions
$questions.hide();

//Show the first question
$($questions.get(currentQuestion)).fadeIn();

//attach a click listener to the HTML element with the id of 'next'
$('#next').click(function () {

     //fade out the current question,
     //putting a function inside of fadeOut calls that function 
     //immediately after fadeOut is completed, 
     //this is for a smoother transition animation
     $($questions.get(currentQuestion)).fadeOut(function () {

        //increment the current question by one
        currentQuestion = currentQuestion + 1;

        //if there are no more questions do stuff
        if (currentQuestion == totalQuestions) {

            var result = sum_values()

            //do stuff with the result
            alert(result);

        } else {

            //otherwise show the next question
            $($questions.get(currentQuestion)).fadeIn();

        }
    });

});








  // Print the initial blanks in console.
  // console.log(iquizzes);

  // document.getElementById("round").innerHTML = iquizzes;








// this.start_time = "15";
// this.target_id = "#timer";
// this.name = "timer";

// function startGame() {
// }
// Countdown.prototype.init = function()
// {
// this.reset();
// setInterval(this.name + '.tick()',1000);
// console.log(setInterval);
// }
// Countdown.prototype.reset =function()
// {
//   time = this.start_time.split(":");
//   this.minutes = parseInt(time[0]);
//   this.seconds = parseInt(time[1]);
//   this.update_target();
// }
// Countdown.prototype.tick = function()
// {
//   if(this.seconds > 0 ||this.minutes > 0)
//   {
//     if(this.seconds == 0)
//     {
//       this.minutes = this.minutes -1
//       this.seconds =59
//     } else {
//     this.seconds = this.seconds - 1;
      
//     }
//   }
//   this.update_target()
// }
// Countdown.prototype.update_target =function()
// {
// seconds = this.seconds;
// if(seconds < 10) seconds = "0" + seconds;
// $(this.target_id).val(this.minutes + ":" + seconds)
// }


