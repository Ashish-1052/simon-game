$("h1").on("click", function () {
  console.log("clicked");
});

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function randomChosenColour() {
  const index = Math.floor(Math.random() * 4);
  return buttonColors[index];
}