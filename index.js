//alert("JS loaded");

/* 
handle the click event by getting the name of the clicked element,
and selecting the first char of the name string and passing to playSound function
*/
function idClicked() {
  let clicked = event.target;
  clicked = clicked.className[0];
  playSound(clicked);
}

/*
handle the keypressed event and pass to playSound function
*/
function keyPressed() {
  let pressed = event.key;
  playSound(pressed);

}

/*
assign and play audio for each cases
*/
function  playSound(activated) {
  switch (activated){
    case "w":
      audioSrc = "./sounds/tom-1.mp3";
      break;
    case "a":
      audioSrc = "./sounds/tom-2.mp3";
      break;
    case "s":
      audioSrc = "./sounds/tom-3.mp3";
      break;
    case "d":
      audioSrc = "./sounds/tom-4.mp3";
      break;
    case "j":
      audioSrc = "./sounds/snare.mp3";
      break;
    case "k":
      audioSrc = "./sounds/crash.mp3";
      break;
    case "l":
      audioSrc = "./sounds/kick-bass.mp3";
      break;
    default:
      audioSrc = "";
      break;
  }

  let audio = new Audio(audioSrc);
  audio.play();
}



//listener for clicked element, looped the function for every element
document.querySelectorAll(".drum").forEach(
  Element => { // {
  Element.addEventListener("click", idClicked);
  });

//listener for pressed keys
document.addEventListener("keypress",keyPressed);