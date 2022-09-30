var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + "randomChosenColour").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

$(".btn").click(function() {
  var userChosenColour = $(this).sttr("id");
  userClickedPattern.push(userChosenColour);
});
