let board = []

for(i = 0 ; i < 9 ; i++){
    board.push(i)
}

function play(clickedID){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedID);

    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedID] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedID] = 'O'
    }
    console.log(board)
}

// horizontal victory
for( i = 0 ; i < 9 ; i++ ){
    if(board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
     alert(`${board[i]} is the winner!`)
    }
}

// vertical victory
for( i = 0 ; i < 9 ; i += 3 ){
    if(board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
     alert(`${board[i]} is the winner!`)
    }
}

// diagonal victories

if(board[0] === board[4] && board[4] === board[8]) {
    alert(`${board[i]} is the winner!`)
}

if(board[2] === board[4] && board[4] === board[6]) {
    alert(`${board[i]} is the winner!`)
}