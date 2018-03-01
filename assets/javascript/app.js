// PSeudo Code:
// The Game has 3 pages;
// Page 1- The game starts with a Start button in the Middle of Page.
// Page 2 - Has the Time ron TOP and the Questiond with multiple Choice answers in the body.
// page 3 - loads when the Timer is run down and the game  is over, this page provides the  results.
// 
// what do we need  to do:
// 1- We  need a count down clock.
// 2- A function to start the  Game (During this all the scores and varibales must be  set to zero)
// 3- We  need a function that  works  with time and it terminates the the game once time is over.
// 4- We need to compare the results selected by the  user with the correct answer to see how many correct and  how many incorrect answers are  selected. //

// Variables:

// Global Variables



var card            = $("#gameBody");
var mySound;




// Functions

// We have 3 Buttons  Start, Done  & Reload Button,
// the Functions for  each is as follows.


$(document).on("click", "#start", function(event){
    trivia.start();
  });
  
$(document).on("click", "#done", function(event){
    trivia.done();
});

$(document).on("click", "#playAgain", function(event){
    location.reload();
});

function playSound(soundFile) {
    var mySound = new Audio("assets/sounds/" + soundFile);
    mySound.play();
  }  


//Questions
// How much you know about Australia?

var questions = [
    {
	question: "What is the Capital of Australia?",
	choices: ["Sydney", "Perth", "Canbera", "Melbourne"],
	answer: "Canbera"

}, {	

	question: " Australians hold the world record for which amazing feat?",
	choices: ["Fastest Beer bottle opening", "Largest Christmas Cracker", " Most Sheep Sheared in 24 hours", "Largest Chicken Dance"],
	answer: "Largest Christmas Cracker"

}, {

	question: "Approximately how many rabbits are there in Australia today?",
	choices: ["3 million", "30 million", "300 million", "3,000 million"],
	answer: "300 million"

}, {

	question: "Which of the following is not an Australian innovation?",
	choices: ["Wine Cask", "Dual Flush Toilet", "Plastic Bank Notesm", "lawn Sprinkler"],
	answer: "lawn Sprinkler"

}, {

	question: "How much of Australia is classified as desert?",
	choices: ["8%", "16%", "25%", "35%"],
    answer: "35%"


}];

//Main Process

var trivia ={
    correctAnswers: 0,
    incorrectAnswers: 0,
    unAnswered: 0,
    stopWatch: 60,


    countdown: function () {
        trivia.stopWatch--;
        $("#timeKeeper").html(trivia.stopWatch);
            if (trivia.stopWatch === 0) {
            alert("TIME'S UP");
            trivia.done();
            }

    },


    start: function() {
        timer = setInterval(trivia.countdown, 1000);
        
        $('#gameBody').prepend('<h4 id="countdownClock">Time Remaining: <span id="timeKeeper">60</span> Seconds</h4>');
        $("#start").remove();
        $("p").remove();
        playSound("85777__sandyrb__didgeridoo-02.wav");
  
        for (var i = 0; i < questions.length; i++) {
        card.append('<h5 id="text">' + questions[i].question + '</h5>');
            for (var j = 0; j < questions[i].choices.length; j++){
            card.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
            }

            card.append("<hr>");
            
        }
            card.append("<button id='done' class='btn  btn-primary btn-lg'>Done</button>");
        
    },
  
        done: function() {
  

            //The $.each() function is not the same as $(selector).each(), which is used to iterate, exclusively, over a jQuery object. The  $.each() function can be used to iterate over any collection, whether it is an object or an array. In the case of an array, the callback is passed an array index and a corresponding array value each time. (The value can also be accessed through the this keyword, but Javascript will always wrap the this value as an Object even if it is a simple string or number value.) The method returns its first argument, the object that was iterated.

            //Note: The $.each() function internally retrieves and uses the length property of the passed collection. So, if the collection has a property called length — e.g. {bar: 'foo', length: 10} — the function might not work as expected.

            $.each($("input[name='question-0']:checked"), function() {
                if ($(this).val() == questions[0].answer) {
                    trivia.correctAnswers++;
                } else {
                    trivia.incorrectAnswers++;
                }
  
            });

            $.each($("input[name='question-1']:checked"), function() {
                if ($(this).val() == questions[1].answer) {
                    trivia.correctAnswers++;
                } else {
                    trivia.incorrectAnswers++;
                }
  
            });

            $.each($("input[name='question-2']:checked"), function() {
                if ($(this).val() == questions[2].answer) {
                    trivia.correctAnswers++;
                } else {
                    trivia.incorrectAnswers++;
                }
  
            });

            $.each($("input[name='question-3']:checked"), function() {
                if ($(this).val() == questions[3].answer) {
                    trivia.correctAnswers++;
                } else {
                    trivia.incorrectAnswers++;
                }
  
            });

            $.each($("input[name='question-4']:checked"), function() {
                if ($(this).val() == questions[4].answer) {
                    trivia.correctAnswers++;
                } else {
                    trivia.incorrectAnswers++;
                }
  
            });
  
            this.results();
        },
  
   // This is the PAge  3 that Pops up.
   //Once the Game is done or the Ttmer has run down.

          results:function() {
           clearInterval(timer);
           $("#card h2").remove();
        //    stop.playSound();
           card.html("<h2>All Done!</h2>");
           card.append("<h3> Correct Answers: " + this.correctAnswers + "</h3>");
           card.append("<h3> Incorrect Answers: " + this.incorrectAnswers + "</h3>");
           card.append("<h3> UnAnswered: " + (questions.length - (this.incorrectAnswers + this.correctAnswers)) + "</h3>");
           card.append("<br><br>");
           card.append("<button id='playAgain' class='btn  btn-primary btn-lg'>Play Again</button>"); // Reloads the page So that the User can play again!!!
          
          }

              
          
  
    };

