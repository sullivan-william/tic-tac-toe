const gameBoard = (() => {
    const display = document.querySelector('#display')
    let board = ['', '', '', '', '', '', '', '', '']

    board.forEach(marker => {
        let div = document.createElement('div')
        div.textContent = marker
        div.setAttribute('class', 'square')
        display.appendChild(div)
    })
})()

const playerFactory = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;

    return {getName, getMarker}
}

const gameController = (() => {
    const playerOne = playerFactory(window.prompt('Player 1:'), 'X')
    const playerTwo = playerFactory(window.prompt('Player 2:'), 'O')

    const playerOneDisplay = document.querySelector('#player-one')
    playerOneDisplay.textContent = `${playerOne.getName()}: ${playerOne.getMarker()}`

    const playerTwoDisplay = document.querySelector('#player-two')
    playerTwoDisplay.textContent = `${playerTwo.getName()}: ${playerTwo.getMarker()}`

    let currentPlayer = playerOne

    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.addEventListener('click', (e) => {
            if (!e.target.textContent) {
                e.target.textContent = currentPlayer.getMarker()
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
})()