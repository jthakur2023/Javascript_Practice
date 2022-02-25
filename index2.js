function getMilk(){
  //console.log
  alert("leave house");
  alert("move left");
  alert("move right");
  alert("move up");
  alert("move left");
  alert("move right");
  alert("move down");
  alert("move left");
  alert("enter house");
}

//karel
function reachTopLeftCorner(){
   move();
   move();
   move();
   move();
   turnLeft();
   move();
   move();
   move();
   move();
}
//karel part 2
function main(){
   putBeeper();
   diagonalBeeper();
   turnleftThree();
   diagonalBeeper();
   turnleftThree();
   diagonalBeeper();
   turnleftThree();
   diagonalBeeper();

}

function turnleftThree(){
   turnLeft();
   turnLeft();
   turnLeft();
}
function diagonalBeeper(){
   move();
   turnLeft();
   move();
   putBeeper();
}
//karel part 3
function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}

function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}

function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}

function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}
