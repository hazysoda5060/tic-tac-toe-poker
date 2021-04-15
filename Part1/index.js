let board = []

for(i = 0 ; i < 9 ; i++){
    board.push(i)
}

function play(clickedID){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedID);

    if(clickedElement.innerText === 'X' || clickedElement.innerText === 'O'){
        alert('cheater')
    } else if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedID] = 'X'
        victoryCheck()
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedID] = 'O'
        victoryCheck()
    }
}


function victoryCheck(){
    // horizontal victory
    for( i = 0 ; i < 9 ; i++ ){
        if(board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
            alert(`${board[i]} is the winner!`)
            victoryReset()
        }
    }
    
    // vertical victory
    for( i = 0 ; i < 9 ; i++ ){
        if(board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
            alert(`${board[i]} is the winner!`)
            victoryReset()
        }
    }
    
    // diagonal victories
    if(board[0] === board[4] && board[4] === board[8]) {
        alert(`${board[4]} is the winner!`)
        victoryReset()
    }
    
    if(board[2] === board[4] && board[4] === board[6]) {
        alert(`${board[4]} is the winner!`)
        victoryReset()
    }
}

function victoryReset(){
    for( i = 0 ; i < 9 ; i++ ){
        boxReset = document.getElementById(i)
        boxReset.innerText = ''
    }
    for(i = 0 ; i < 9 ; i++){
        board.splice(i, 1, i)
    }
    console.log(board)
}