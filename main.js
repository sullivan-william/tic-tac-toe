const display = document.querySelector('#display')

const gameBoard = (() => {
    let board = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X']
    
    const fillBoard = () => {
        board.forEach(marker => {
            let div = document.createElement('div')
            div.textContent = marker
            display.appendChild(div)
        })
    }

    return {fillBoard}

})()

gameBoard.fillBoard()
