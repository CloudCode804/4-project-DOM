let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guessess");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numOfguess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1) {
    alert("Please enter a number greater than 0.");
  } else if (guess > 100) {
    alert("Please enter a number less than 101.");
  } else {
    prevGuess.push(guess);
    if (numOfguess === 10) { // Changed to 10
      displayGuess(guess);
      displayMassage(`Game Over. Random Number was ${randomNumber}`);
      EndGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMassage("You guessed it right!");
    EndGame();
  } else if (guess < randomNumber) {
    displayMassage("Number is too low.");
  } else if (guess > randomNumber) {
    displayMassage("Number is too high.");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `; 
  numOfguess++;
  remaining.innerHTML = `${10 - numOfguess}`;
}

function displayMassage(message) {
  lowOrHi.innerHTML = `<h1>${message}</h1>`;
}

function EndGame() {
  userInput.value=''
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}
function newGame(){
const newGameBtn=document.querySelector('#newGame')
newGameBtn.addEventListener("click",function(e){
    
    randomNumber= parseInt(Math.random() * 100 + 1);
    prevGuess=[]
    numOfguess=1
    guessSlot.innerHTML=""
    remaining.innerHTML = `${10 - numOfguess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
})
}