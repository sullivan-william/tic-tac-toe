const pvpBtn = document.querySelector('#pvp-btn')
const nameInput = document.querySelector('#name-input')
const playerOneName = document.querySelector('#p1-name')
const playerTwoName = document.querySelector('#p2-name')
const startBtn = document.querySelector('#start-game')
const playerDisplay = document.querySelector('#players')
const playerOneDisplay = document.querySelector('#p1')
const playerTwoDisplay = document.querySelector('#p2')
const resultDisplay = document.querySelector('#results')

let playerOne
let playerTwo
let currentPlayer

pvpBtn.addEventListener('click', (e) => {
    nameInput.classList.remove('hidden')
    pvpBtn.classList.add('hidden')
})

startBtn.addEventListener('click', (e) => {
    playerOne = playerFactory(playerOneName.value || 'Player 1', 'X')
    playerTwo = playerFactory(playerTwoName.value || 'Player 2', 'O')
    nameInput.classList.add('hidden')
    playerDisplay.classList.remove('hidden')
    playerOneDisplay.textContent = `${playerOne.getName()}: ${playerOne.getMarker()}`
    playerTwoDisplay.textContent = `${playerTwo.getName()}: ${playerTwo.getMarker()}`
    currentPlayer = playerOne
})

const playerFactory = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;

    return {getName, getMarker}
}

const gameController = (() => {
    let board = ['', '', '', '', '', '', '', '', '']

    let gameOver = false

    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.addEventListener('click', (e) => {
            // If players have not been named do not start game
            if (!currentPlayer) {
                return
            }
            // If the game has been won and user clicks on the board, it will start a new game starting with playerOne('X')
            if (gameOver === true) {
                currentPlayer = playerOne
                reset()
            }
            if (!e.target.textContent) {
                e.target.textContent = currentPlayer.getMarker()
                board[e.target.id] = currentPlayer.getMarker()
                checkGameOver()
                if (currentPlayer === playerOne) {
                    currentPlayer = playerTwo
                } else {
                    currentPlayer = playerOne
                }
            } else {
                console.log("Invalid")
            }
        })
    })

    const checkGameOver = () => {
        if ((board[0] === board[1] && board[1] === board[2] && board[0] !== '')
        || (board[3] === board[4] && board[4] === board[5] && board[3] !== '')
        || (board[6] === board[7] && board[7] === board[8] && board[6] !== '')
        || (board[0] === board[3] && board[3] === board[6] && board[0] !== '')
        || (board[1] === board[4] && board[4] === board[7] && board[1] !== '')
        || (board[2] === board[5] && board[5] === board[8] && board[2] !== '')
        || (board[0] === board[4] && board[4] === board[8] && board[0] !== '')
        || (board[2] === board[4] && board[4] === board[6] && board[2] !== '')) {
            gameOver = true
            playerDisplay.classList.add('hidden')
            resultDisplay.classList.remove('hidden')
            resultDisplay.textContent = `${currentPlayer.getName()} is the WINNER!`
        } else {
            return
        }
    }

    const reset = () => {
        board = ['', '', '', '', '', '', '', '', '']
        squares.forEach(square => {
            square.textContent = ''
        })
        gameOver = false
    }
})()