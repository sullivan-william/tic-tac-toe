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
    const playerOne = playerFactory('Rick', 'X')
    const playerTwo = playerFactory('Charlene', 'O')

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