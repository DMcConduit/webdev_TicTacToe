// restart game //
var restart = document.querySelector('#restart');

// grab all squares //
var squares = document.querySelectorAll("td");

// clear all squares //
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click', clearBoard)


//mark square //

function changeMarker() {
    if (this.textContent === ''){
      this.textContent = 'X';
      console.log(changeMarker)
    } else if (this.textContent === 'X') {
      this.textContent = 'O';
    } else {
      this.textContent = '';
    }
};

// use for loop to mark squares with addEventListener //

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', changeMarker);
}

  //var sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9;

  var sq1 = document.getElementById("sq1").textContent;
  var sq2 = document.getElementById("sq2").textContent;
  var sq3 = document.getElementById("sq3").textContent;
  var sq4 = document.getElementById("sq4").textContent;
  var sq5 = document.getElementById("sq5").textContent;
  var sq6 = document.getElementById("sq6").textContent;
  var sq7 = document.getElementById("sq7").textContent;
  var sq8 = document.getElementById("sq8").textContent;
  var sq9 = document.getElementById("sq9").textContent;

  // notify winner of game //
  //function checkWin() {

  //if ((sq1.textContent === 'X') && (sq2.textContent ==='X') && (sq3.textContent === 'X')){//||
    //  (sq4.textContent === 'X') && (sq5.textContent === 'X') && (sq6.textContent ===s 'X') ||
    //  (sq7.textContent === 'X') && (sq8.textContent === 'X') && (sq9.textContent === 'X') ||
    //  (sq1.textContent === 'X') && (sq4.textContent === 'X') && (sq7.textContent === 'X') ||
    //  (sq2.textContent === 'X') && (sq5.textContent === 'X') && (sq8.textContent === 'X') ||
    //  (sq3.textContent === 'X') && (sq6.textContent === 'X') && (sq9.textContent === 'X') ||
    //  (sq1.textContent === 'X') && (sq5.textContent === 'X') && (sq9.textContent === 'X') ||
    //  (sq3.textContent === 'X') && (sq5.textContent === 'X') && (sq7.textContent === 'X')){
       //document.getElementById('notfy').innerHTML = "Player X wins!"//
       //alert('Player X wins!');
  //} else  ((squares[sq1].textContent === 'O') && (squares[sq2].textContent === 'O') && (squares[sq3].textContent === 'O')){ //||
              //(sq4.textContent === 'O') && (sq5.textContent === 'O') && (sq6.textContent === 'O') ||
              //(sq7.textContent === 'O') && (sq8.textContent === 'O') && (sq9.textContent === 'O') ||
              //(sq1.textContent === 'O') && (sq4.textContent === 'O') && (sq7.textContent === 'O') ||
              //(sq2.textContent === 'O') && (sq5.textContent === 'O') && (sq8.textContent === 'O') ||
              //(sq3.textContent === 'O') && (sq6.textContent === 'O') && (sq9.textContent === 'O') ||
              //(sq1.textContent === 'O') && (sq5.textContent === 'O') && (sq9.textContent === 'O') ||
              //(sq3.textContent === 'O') && (sq5.textContent === 'O') && (sq7.textContent === 'O')){
        //alert('Player O wins!');
    //} else {
        //alert('No one wins, try again!');
    //}
//};
