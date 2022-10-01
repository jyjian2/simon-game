//press -> nextSequence -> random colour -> push random clour in gamePattern -> user click to match
// gamePattern

var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;

var started = false;

var userClickTime = 0;

$(document).on("keypress", function() {
  if (!started) {
    $("#level-title").text("Level 0");
    started = true;
    nextSequence();
  }
});

function nextSequence() {
    level++;
    userClickedPattern = [];
    userClickTime = 0;

    $("#level-title").text("level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkUserAnswer();

});

function checkUserAnswer() {
  if (userClickedPattern[userClickTime] === gamePattern[userClickTime]) {
    userClickTime++;
    if (userClickedPattern.length === gamePattern.length) {
      nextSequence();
    }
  } else {
    $("#level-title").text("Game Over");
    var gameOverSound = new Audio("sounds/wrong.mp3");
    gameOverSound.play();
    gameOverAnimation();
    startOver();
  }
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed")
  }, 100)
};

function gameOverAnimation() {
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over")
  }, 200);
}

function startOver() {
  started = false;
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  userClickTime = 0;
  $("#level-title").text("Press A Key to Start");
}
