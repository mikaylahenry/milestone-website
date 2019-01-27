$(document).ready(function() {
var magic8Ball = {};
magic8Ball.listOfAnswers = ["Yes", "No", "Maybe", "Outlook Uncertain", "Likely Not", "Probably So"];
magic8Ball.answerQuestion = function (question) {
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
$("#answer").fadeIn(3000);
var randomNumber = Math.random();
var randomArrayNumber = this.listOfAnswers.length * randomNumber;
var arrayPosition = Math.floor(randomArrayNumber);
var answer = this.listOfAnswers[arrayPosition];
$("#answer").text(answer);
console.log(question);
console.log(answer);
};
$("#answer").hide();

var onClick = function () {
  $("#answer").hide();
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
  setTimeout(
    function () {
      var question = prompt("Ask a yes/no question!");
      $("#8ball").effect("shake");
      magic8Ball.answerQuestion(question);
    }, 500);
};

$("#questionButton").click(onClick);
});
