document.addEventListener('DOMContentLoaded',function(){
    const upLeft = document.getElementById('1');
    const upMiddle = document.getElementById('2');
    const upRight = document.getElementById('3');
    const middleLeft = document.getElementById('4');
    const middleMiddle = document.getElementById('5');
    const middleRight = document.getElementById('6');
    const downLeft = document.getElementById('7');
    const downMiddle = document.getElementById('8');
    const downRight = document.getElementById('9');
    const result = document.getElementById('result');
    const reset = document.getElementById('reset');

    let player1 = true;
    let player2 = false;

    const board = [0,0,0
                  ,0,0,0
                  ,0,0,0
    ]

    upLeft.addEventListener('click',function(){
        if(player1){
            upLeft.innerHTML = '<p>X</p>';
            player1 = false;
            player2 = true;
            board[0] = 1;
            console.log(board)
            winnerPlayerOne()
        }else{
            upLeft.innerHTML = '<p>O</p>';
            player1 = true;
            player2 = false;
            board[0] = 5;
            console.log(board)
            winnerPlayerTwo()
        }
    });    

    upMiddle.addEventListener('click',function(){
        if(player1){
            upMiddle.innerHTML = '<p>X</p>';
            player1 = false;
            player2 = true;
            board[1] = 1;
            winnerPlayerOne()
            console.log(board)
        }else{
            upMiddle.innerHTML = '<p>O</p>';
            player1 = true;
            player2 = false;
            board[1] = 5;
            winnerPlayerTwo()
        }
    });    

    upRight.addEventListener('click',function(){
        if(player1){
            upRight.innerHTML = '<p>X</p>';
            player1 = false;
            player2 = true;
            board[2] = 1;
            winnerPlayerOne()
            console.log(board)
        }else{
            upRight.innerHTML = '<p>O</p>';
            player1 = true;
            player2 = false;
            board[2] = 5;
            winnerPlayerTwo()
        }
    });    

    middleLeft.addEventListener('click',function(){
        if(player1){
            middleLeft.innerHTML = '<p>X</p>';
            player1 = false;
            player2 = true;
            board[3] = 1;
            winnerPlayerOne()
            console.log(board)
        }else{
            middleLeft.innerHTML = '<p>O</p>';
            player1 = true;
            player2 = false;
            board[3] = 5;
            winnerPlayerTwo()
        }
    });

    middleMiddle.addEventListener('click',function(){
        if(player1){
            middleMiddle.innerHTML = '<p>X</p>';
            player1 = false;
            player2 = true;
            board[4] = 1;
            winnerPlayerOne()
            console.log(board)
        }else{
            middleMiddle.innerHTML = '<p>O</p>';
            player1 = true;
            player2 = false;
            board[4] = 5;
            winnerPlayerTwo()
        }
    });    

    middleRight.addEventListener('click',function(){
        if(player1){
            middleRight.innerHTML = '<p>X</p>';
            player1 = false;
            player2 = true;
            board[5] = 1;
            winnerPlayerOne()
            console.log(board)
        }else{
            middleRight.innerHTML = '<p>O</p>';
            player1 = true;
            player2 = false;
            board[5] = 5;
            winnerPlayerTwo()
        }
    });    

    downLeft.addEventListener('click',function(){
        if(player1){
            downLeft.innerHTML = '<p>X</p>';
            player1 = false;
            player2 = true;
            board[6] = 1;
            winnerPlayerOne()
            console.log(board)
        }else{
            downLeft.innerHTML = '<p>O</p>';
            player1 = true;
            player2 = false;
            board[6] = 5;
            winnerPlayerTwo()
        }
    });    

    downMiddle.addEventListener('click',function(){
        if(player1){
            downMiddle.innerHTML = '<p>X</p>';
            player1 = false;
            player2 = true;
            board[7] = 1;
            winnerPlayerOne()
            console.log(board)
        }else{
            downMiddle.innerHTML = '<p>O</p>';
            player1 = true;
            player2 = false;
            board[7] = 5;
            winnerPlayerTwo()
        }
    });   

    downRight.addEventListener('click',function(){
        if(player1){
            downRight.innerHTML = '<p>X</p>';
            player1 = false;
            player2 = true;
            board[8] = 1;
            winnerPlayerOne()
            console.log(board)
        }else{
            downRight.innerHTML = '<p>O</p>';
            player1 = true;
            player2 = false;
            board[8] = 5;
            winnerPlayerTwo()
        }
    });    

    reset.addEventListener('click',function(){
        location.reload()
    });

    function winnerPlayerOne(){
        if(board[0] + board[1] + board[2] == 3){
            result.innerText = 'Player one is the winner';
        }else if(board[3] + board[4] + board[5] == 3){
            result.innerText = 'Player one is the winner';
        }else if(board[6] + board[7] + board[8] == 3){
            result.innerText = 'Player one is the winner';
            //horizontale
        }else if(board[0] + board[4] + board[8] == 3){
            result.innerText = 'Player one is the winner';
        }else if(board[2] + board[4] + board[6] == 3){
            result.innerText = 'Player one is the winner';
            //dijagonale
        }else if(board[0] + board[3] + board[6] == 3){
            result.innerText = 'Player one is the winner';
        }else if(board[1] + board[4] + board[7] == 3){
            result.innerText = 'Player one is the winner';
        }else if(board[2] + board[5] + board[8] == 3){
            result.innerText = 'Player one is the winner';
            //veritkale
        }else{
            if(board.includes(0)){
                result.innerText = '';
            }else{
                result.innerText = 'draw';
            }
        }
    }

    function winnerPlayerTwo(){
        if(board[0] + board[1] + board[2] == 15){
            result.innerText = 'Player two is the winner';
        }else if(board[3] + board[4] + board[5] == 15){
            result.innerText = 'Player two is the winner';
        }else if(board[6] + board[7] + board[8] == 15){
            result.innerText = 'Player two is the winner';
            //horizontale
        }else if(board[0] + board[4] + board[8] == 15){
            result.innerText = 'Player two is the winner';
        }else if(board[2] + board[4] + board[6] == 15){
            result.innerText = 'Player two is the winner';
            //dijagonale
        }else if(board[0] + board[3] + board[6] == 15){
            result.innerText = 'Player two is the winner';
        }else if(board[1] + board[4] + board[7] == 15){
            result.innerText = 'Player two is the winner';
        }else if(board[2] + board[5] + board[8] == 15){
            result.innerText = 'Player two is the winner';
            //veritkale
        }
    }

    
})