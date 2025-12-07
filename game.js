var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var playerPattern = [];
let playerPatternLastIndex;

function randomChosenColour() {
  const index = Math.floor(Math.random() * 4);
  return buttonColors[index];
}

$(".btn").on("click", playerTurn);

$(document).one("keydown", function () {
  gameTurn();
});

function gameTurn() {
  const randomColor = randomChosenColour();
  playSound(randomColor);
  gamePattern.push(randomColor);
  animatePress(randomColor);
  $("h1").text("Level " + gamePattern.length);
}

function playerTurn() {
  const color = $(this).attr("id");
  playerPattern.push(color);
  playerPatternLastIndex = playerPattern.length - 1;
  playSound(color);
  animatePress(color);

  if (playerPattern[playerPatternLastIndex] === gamePattern[playerPatternLastIndex]) {
    if (playerPattern.length === gamePattern.length) {
      playerPattern = [];
      setTimeout(gameTurn, 1000);
    }
  }
  else {
    gameOver();
  }
}

function gameOver() {
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  const audio = new Audio('./sounds/wrong.mp3');
  audio.play();
  $("h1").text("Game Over, Press Any Key to Restart");
  playerPattern = [];
  gamePattern = [];
  $(document).one("keydown", function () {
    gameTurn();
  });
}

function playSound(name) {
  const audio = new Audio('./sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(color) {
  const button = $("." + color);
  button.addClass("pressed");
  setTimeout(function () {
    button.removeClass("pressed");
  }, 100);
}