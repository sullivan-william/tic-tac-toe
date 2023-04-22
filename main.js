const playerFactory = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;

    return {getName, getMarker}
}

const gameController = (() => {
    let board = ['', '', '', '', '', '', '', '', '']
    // const playerOne = playerFactory(window.prompt('Player 1:'), 'X')
    // const playerTwo = playerFactory(window.prompt('Player 2:'), 'O')
    const playerOne = playerFactory('Rufio', 'X')
    const playerTwo = playerFactory('Robby', 'O')

    const playerOneDisplay = document.querySelector('#player-one')
    playerOneDisplay.textContent = `${playerOne.getName()}: ${playerOne.getMarker()}`

    const playerTwoDisplay = document.querySelector('#player-two')
    playerTwoDisplay.textContent = `${playerTwo.getName()}: ${playerTwo.getMarker()}`

    let currentPlayer = playerOne
    let gameOver = false

    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.addEventListener('click', (e) => {
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
            console.log("Game Over")
            gameOver = true
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