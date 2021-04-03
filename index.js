//Detecting Button Press


var numberOfDrumsButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumsButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//Detecting KeyBoard Press

document.addEventListener("keydown",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});





function makesound(key)
{
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;
    default:cosole.log(innerHTML);

  }

}

function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },50);
}

// var numberOfDrumsButton = document.querySelectorAll(".drum").length;
//
// for (var i = 0; i< numberOfDrumsButton; i++) {
//
//   document.querySelectorAll("button")[i].addEventListener("click",handleClick);
// }
//
// function handleClick()
// {
//   alert("I got the call");
// }


// var audio = new Audio("sounds/crash.mp3");
// audio.play();
