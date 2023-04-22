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