let randomNumber = parseInt(Math.random() * 100 + 1);
  
const userInput = document.querySelector('#guessField');
const Submit = document.querySelector('#subt');
const lastGuess = document.querySelector('.guesses');
const Remaning = document.querySelector('.remaingGuesses');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numbGuess = 1;

let playGame = true;

if (playGame) {
    Submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validGuess(guess)
    })
}


function validGuess(guess) {
    if (isNaN(guess)){
        alert("Don't play with me you peaice of shit just choose a number")
    }
    else if (guess < 1){
        alert("Choose a number bigger then 1 you dumb fuck")
    }
    else if (guess > 100){
        alert("Choose a number less then 100 you fucking nimrod")
    }
    else{
        prevGuess.push(guess)
        if (numbGuess === 10) {
            displayGuess(guess)
            displayMessage(`Looking for this? ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Wow ${guess} is right never know u don't have life`)
        endGame()
    }
    else if ( guess < randomNumber){
        displayMessage(`Your chosen number was small nigga`)
    }
    else if (guess > randomNumber){
        displayMessage(`Your chosen number was big nigga`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    lastGuess.innerHTML += ` |${guess}|`
    numbGuess++;
    Remaning.innerHTML = `${11-numbGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id= "newGame">Start new game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameb1 = document.querySelector('#newGame')
    newGameb1.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numbGuess = 1
        lastGuess.innerHTML = ''
        Remaning.innerHTML = `${11-numbGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true  

    })

}

