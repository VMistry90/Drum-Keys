var drumBtns = document.querySelectorAll(".drum");

for (var i = 0; i < drumBtns.length; i++) {
  drumBtns[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    addSoundAudio(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
  document.addEventListener("keydown", function(event) {
    addSoundAudio(event.key);
    buttonAnimation(event.key);
  })
}

function addSoundAudio(key) {
  switch (key) {
    case "w":
      var crashAudio = new Audio("sounds/crash.mp3");
      crashAudio.play();
      break;
    case "a":
      var kickBassAudio = new Audio("sounds/kick-bass.mp3");
      kickBassAudio.play();
      break;
    case "s":
      var snareAudio = new Audio("sounds/snare.mp3");
      snareAudio.play();
      break;
    case "d":
      var tom1Audio = new Audio("sounds/tom-1.mp3");
      tom1Audio.play();
      break;
    case "j":
      var tom2Audio = new Audio("sounds/tom-2.mp3");
      tom2Audio.play();
      break;
    case "k":
      var tom3Audio = new Audio("sounds/tom-3.mp3");
      tom3Audio.play();
      break;
    case "l":
      var tom4Audio = new Audio("sounds/tom-4.mp3");
      tom4Audio.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function (){
    activeButton.classList.remove("pressed");
  }, 100);
}
// var drumBtns = document.querySelectorAll(".drum");
// var drumLetters = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
//
// for (var i = 0; i < drumBtns.length; i++)
// {
//   var drumAudio = "sounds/" + drumLetters[i];
//   drumBtns[i].addEventListener("click", function(){
//     var audio = new Audio(drumAudio);
//     audio.play();
//   })
// }
