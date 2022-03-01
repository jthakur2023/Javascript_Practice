function lifeInWeeks(age){
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;

  console.log("You have " + days + "days," + weeks + " weeks and" +months+ " months left");
}

function getMilk(money, costPerBottle){
  alert("leave house");
  alert("move left");
  alert("move right");
  alert("move up");
  alert("move left");
  console.log("buy " + calcBottlesOfMilk(money, costPerBottle) + " bottles of milk");
  alert("move right");
  alert("move down");
  alert("move left");
  alert("enter house");

  return calcChange(money, 2.5);
}
function calcBottlesOfMilk(startingMoney, costPerBottle){
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}
function calcChange(startingAmount, costPerBottle){
  var change = startingAmount % costPerBottle;
  return change;
}
console.log("Here is your " +getMilk(5, 1.5)+ " change");

function bmiCalc(weight, height){
  //bmiCalc(65,1.8) = 20
  var num = weight;
  var denom = Math.pow(height, 2);
  var bmi = num / denom;
  return bmi;
}

console.log(bmiCalc(65,1.8));

var name1 = prompt("Enter your name:");
var name2 = prompt("Enter your crush's name:");
function loveCalc(name1, name2){

  var n = Math.random();
  n = n * 100;
  n = Math.floor(n)+1;
  return n;
}
console.log(name1 +" "+name2+" have "+loveCalc(name1, name2)+" % of love");

var c= 1;
var d = "1";
//checks value is same
if(c == d){
    console.log("yes");
}else{
  console.log("no");
}
//checks data type with value also
if(c===d){
  console.log("yes");
}else{
  console.log("no");
}

function bmiCalc2(weight, height){
  var num = weight;
  var denom = Math.pow(height, 2);
  var bmi = num / denom;
  if(bmi <=18.5){
    return "Your BMI is "+bmi+ ", so you are underweight";
  }
  else if(bmi >18.5 || bmi < 24.9){
    return "Your BMI is "+bmi+ ", so you are normal weight";
  }
  if(bmi >=24.9){
    return "Your BMI is "+bmi+ ", so you are overweight";
  }

}
