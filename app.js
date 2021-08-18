let winningScore = 0;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let playingGame = true;
//buttons

let button1 = document.querySelector("#b1");
let button2 = document.querySelector("#b2");
let button3 = document.querySelector("#b3");
//spans

let span1 = document.querySelector("#s1");
let span2 = document.querySelector("#s2");
// List

let chooseNumber = document.querySelector("#playTo");
chooseNumber.addEventListener("change", function () {
  winningScore = this.value;
  allReset();
});
// buttons addEvenListener

button1.addEventListener("click", function () {
  if (playingGame) {
    scorePlayer1 += 1;
    if (scorePlayer1 == winningScore) {
      playingGame = false;
      span1.classList.add("has-text-link");
      span2.classList.add("has-text-danger");
    }
    span1.textContent = scorePlayer1;
  }
});
button2.addEventListener("click", function () {
  if (playingGame) {
    scorePlayer2 += 1;
    if (scorePlayer2 == winningScore) {
      playingGame = false;
      span2.classList.add("has-text-link");
      span1.classList.add("has-text-danger");
    }
    span2.textContent = scorePlayer2;
  }
});

button3.addEventListener("click", function () {
  allReset();
});
//reset function

function allReset() {
  playingGame = true;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  span2.textContent = scorePlayer2;
  span1.textContent = scorePlayer1;
  span1.classList.remove("has-text-link", "has-text-danger");
  span2.classList.remove("has-text-link", "has-text-danger");
}
