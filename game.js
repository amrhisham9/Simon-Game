var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length -1);
});

$(document).keypress(function(){

  if(!started){
  $("#level-title").text("Level " + level);
  nextSequence();
  started = true;
  }
});

function nextSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
  $("#"+currentColour).removeClass("pressed");
  }, 100);

}

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("success");
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 900);

      }
  }else{
    $("h1").text("Game Over, Press Any Key To Restart");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 700);
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}







//   switch (randomChosenColour) {
//   case "red":
//     $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds/red.mp3");
//     audio.play();
//   break;
//   case "blue":
//     $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds/blue.mp3");
//     audio.play();
//   break;
//   case "green":
//     $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds/green.mp3");
//     audio.play();
//   break;
//   case "yellow":
//     $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds/yellow.mp3");
//     audio.play();
//   break;
//   default:
//
// }
