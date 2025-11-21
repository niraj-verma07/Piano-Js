const keys = document.querySelectorAll(".white-key, .black-key");

document.body.addEventListener("keydown", (key) => {
  keys.forEach((elem) => {
    if (key.key.toUpperCase() == elem.innerText) {
      elem.classList.add("active");
    }
  });
});

document.body.addEventListener("keyup", (key) => {
  keys.forEach((elem) => {
    if (key.key.toUpperCase() == elem.innerText) {
      elem.classList.remove("active");
    }
  });
});

function playSound(num) {
  const audio = new Audio(`./Sounds/${num}.mp3`);
  audio.play();
}

// Mouse
document.addEventListener("click", (e) => {
  //   console.log(e.target.innerText);
  const k = e.target.innerText.toLowerCase();
  let num = null;

  // A – Z
  if (k === "a") num = 28;
  else if (k === "b") num = 29;
  else if (k === "c") num = 30;
  else if (k === "d") num = 31;
  else if (k === "e") num = 32;
  else if (k === "f") num = 33;
  else if (k === "g") num = 34;
  else if (k === "h") num = 35;
  else if (k === "i") num = 36;
  else if (k === "j") num = 37;
  else if (k === "k") num = 38;
  else if (k === "l") num = 39;
  else if (k === "m") num = 40;
  else if (k === "n") num = 41;
  else if (k === "o") num = 42;
  else if (k === "p") num = 43;
  else if (k === "q") num = 44;
  else if (k === "r") num = 45;
  else if (k === "s") num = 46;
  else if (k === "t") num = 47;
  else if (k === "u") num = 48;
  else if (k === "v") num = 49;
  else if (k === "w") num = 50;
  else if (k === "x") num = 51;
  else if (k === "y") num = 52;
  else if (k === "z") num = 53;
  // 0 – 9
  else if (k === "0") num = 54;
  else if (k === "1") num = 55;
  else if (k === "2") num = 56;
  else if (k === "3") num = 57;
  else if (k === "4") num = 58;
  else if (k === "5") num = 59;
  else if (k === "6") num = 60;
  else if (k === "7") num = 61;
  else if (k === "8") num = 62;
  else if (k === "9") num = 63;

  if (!num) return;

  playSound(num);
});

// Keyboard
document.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();
  let num = null;

  // A – Z
  if (k === "a") num = 28;
  else if (k === "b") num = 29;
  else if (k === "c") num = 30;
  else if (k === "d") num = 31;
  else if (k === "e") num = 32;
  else if (k === "f") num = 33;
  else if (k === "g") num = 34;
  else if (k === "h") num = 35;
  else if (k === "i") num = 36;
  else if (k === "j") num = 37;
  else if (k === "k") num = 38;
  else if (k === "l") num = 39;
  else if (k === "m") num = 40;
  else if (k === "n") num = 41;
  else if (k === "o") num = 42;
  else if (k === "p") num = 43;
  else if (k === "q") num = 44;
  else if (k === "r") num = 45;
  else if (k === "s") num = 46;
  else if (k === "t") num = 47;
  else if (k === "u") num = 48;
  else if (k === "v") num = 49;
  else if (k === "w") num = 50;
  else if (k === "x") num = 51;
  else if (k === "y") num = 52;
  else if (k === "z") num = 53;
  // 0 – 9
  else if (k === "0") num = 54;
  else if (k === "1") num = 55;
  else if (k === "2") num = 56;
  else if (k === "3") num = 57;
  else if (k === "4") num = 58;
  else if (k === "5") num = 59;
  else if (k === "6") num = 60;
  else if (k === "7") num = 61;
  else if (k === "8") num = 62;
  else if (k === "9") num = 63;

  if (!num) return;

  playSound(num);
});
