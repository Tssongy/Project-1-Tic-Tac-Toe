player1 = {
    name: 'player1',
    mark: 'O',
    color: 'lightyellow',
    score: 0
}

player2 = {
    name: 'player2',
    mark: 'X',
    color: 'lightblue',
    score: 0
}

var numGames = 0

function updateScore(player) {
    var scoreBoard = document.querySelector(`.${player.name} .score`)
    player.score++
    scoreBoard.textContent = player.score
}

function resetBoard(size) {
    var board = document.querySelector('.board')
    board.classList.add('firstPlayer')
    while (board.firstChild){
        board.removeChild(board.lastChild)
    }
    createBoard(size)
}

function displayGameEnd (player, size, won) {
    document.querySelector('.player1 .player-name').classList.remove('active-player')
    document.querySelector('.player2 .player-name').classList.remove('active-player')

    numGames++
    var gameEndDisplay = document.querySelector('.game-end')
    var numGamesDisplay = document.querySelector('.num-games-played')
    numGamesDisplay.textContent = numGames
    if (won) {
        gameEndDisplay.firstElementChild.textContent = `${player.name} has won!`
    }
    else {
        gameEndDisplay.firstElementChild.textContent = 'DRAW!'
    }
    gameEndDisplay.style.visibility = 'visible'

    gameEndDisplay.lastElementChild.addEventListener('click', function toggleVisibility(event) {
        // Remove the very same event listener to avoid stacking of this event listener
        event.target.removeEventListener('click', toggleVisibility)
        gameEndDisplay.style.visibility = 'hidden'
        resetBoard(size)
    })
}



function checkForWin (size, player) {
    var hasWonDia1 = true;
    var hasWonDia2 = true;
    var draw = true;

    for (var i = 1; i <= size; i++) {
        var hasWonRow = true;
        var hasWonCol = true;
        
        var thisRow = document.querySelector(`.row${i}`)
        var thisCols = document.querySelectorAll(`.col${i}`)
       
        // Check if a player has won by a column
        for (let item of thisCols) {
            if (item.textContent != player.mark) {
                hasWonCol = false;
            }
        }
        
        // Check if a player has won by a row or a draw
        for (var j = 1; j <= size; j++) {
            if (thisRow.children[j-1].textContent != player.mark) {
                hasWonRow = false
            }

            if (thisRow.children[j-1].textContent === '') {
                draw = false
            }

        }

        // Check if a player has won diagonally
        if (thisRow.children[i-1].textContent != player.mark) {
            hasWonDia1 = false;
        }
        if (thisRow.children[size-i].textContent != player.mark) {
            hasWonDia2 = false;
        }
        if (hasWonRow || hasWonCol) {
            updateScore(player)
            displayGameEnd(player, size, true)
            return console.log(`${player.name} has won!`)
        }
    }

    if (hasWonDia1 || hasWonDia2) {
        updateScore(player)
        displayGameEnd(player, size, true)
        return console.log(`${player.name} has won!`)
    }

    if (draw) {
        displayGameEnd(player, size, false)
    }
}

function assignClickListener(box, size) {
    var board = document.querySelector('.board')

    box.addEventListener('click', function (event) {
        
        if(event.target.textContent === ''){

            if (board.classList.contains('firstPlayer')) {
                document.querySelector('.player1 .player-name').classList.remove('active-player')
                document.querySelector('.player2 .player-name').classList.add('active-player')
                
                event.target.innerHTML = `<span style='color:${player1.color}'>${player1.mark}</span>`
                checkForWin(size, player1)
            }

            else {
                document.querySelector('.player2 .player-name').classList.remove('active-player')
                document.querySelector('.player1 .player-name').classList.add('active-player')
                event.target.innerHTML = `<span style='color:${player2.color}'>${player2.mark}</span>`
                checkForWin(size, player2)
            }

            board.classList.toggle('firstPlayer')  
        }                                 
    })
}

function buttonInPlay(size) {
    var buttons = document.querySelectorAll('.menu button')

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.color =''
        buttons[i].style.backgroundColor = ''
    }

    if (size === 3) {
        buttons[0].style.color = 'white'
        buttons[0].style.backgroundColor = 'orange'
    }

    else if (size === 5) {
        buttons[1].style.color = 'white'
        buttons[1].style.backgroundColor = 'orange'
    }

    else {
        buttons[2].style.color = 'white'
        buttons[2].style.backgroundColor = 'orange'
    }
}

function createBoard(size) {
    document.querySelector('.player2 .player-name').classList.remove('active-player')
    document.querySelector('.player1 .player-name').classList.add('active-player')
    buttonInPlay(size)
    for (var i = 1; i <= size; i++){
        var row = document.createElement('section')
        for (var j = 1; j <= size; j++) {
            // Generate each column in a row
            var col = document.createElement('div')
            col.className = `col${j}`
            // 'Click' event listener for each column created
            assignClickListener(col, size)
            row.append(col)
        }
        row.className = `row${i}`
        document.querySelector('.board').append(row)
    }
}
// When the page refreshes...

function init () {
  createBoard(3)

    document.querySelector('.three-by-three').addEventListener('click', function () {
        resetBoard(3)
    })
    document.querySelector('.five-by-five').addEventListener('click', function () {
        resetBoard(5)
    })
    document.querySelector('.seven-by-seven').addEventListener('click', function () {
        resetBoard(7)
    })  
}

init()

