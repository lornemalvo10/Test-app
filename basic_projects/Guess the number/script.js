let rightNum = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const prevGuesses = document.querySelector('.guesses')
let remainingChances = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let p = document.createElement('p')

let playGame = true
let allGuesses = []
let attempNumber = 1

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault()
        const guess = parseInt(userInput.value)
        checkGuessValue(guess)
        console.log(guess, rightNum)
    })
}

function checkGuessValue(guess){
    if(isNaN(guess)){
        printMessage(`Please enter a valid number >1 and <=100`)
    } 
    else if(guess<=1){
        printMessage(`Please enter a number greater than 1`)
    }
    else if(guess>100){
        printMessage(`Please enter a number less than 100`)
    }
    else{
        allGuesses.push(guess)
        updateValues()

        if(attempNumber===11){
            printMessage(`GAME OVER. The number was ${rightNum}`)
            endGame()
        }
        else{
            checkRange(guess)
        }
    }
}

function checkRange(guess){
    if(rightNum===guess){
        printMessage(`You guessed it 🙌`)
        endGame()
    }
    else if(guess>rightNum){
        printMessage(`Your guess is too high`)
    }
    else if(guess<rightNum){
        printMessage(`Your guess is too low`)
    }
}

function printMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function updateValues(){
    userInput.value = ''
    prevGuesses.innerHTML += `${allGuesses[allGuesses.length - 1]}  `
    
    remainingChances.innerHTML = `${10-attempNumber}`
    attempNumber += 1
}

function endGame(){
    // userInput.value = ''
    userInput.setAttribute('disabled', '')

    p.classList.add('button')
    p.innerHTML = `<h2 id="button">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    startGameAgain()

}

function startGameAgain(){
    const button = document.querySelector('#button')
    button.addEventListener('click', function(e){
    rightNum = parseInt(Math.random() * 100 + 1)
    allGuesses = []
    attempNumber = 1
    prevGuesses.innerHTML = ''
    remainingChances = 10

    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true
    })
}

