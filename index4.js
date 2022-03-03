function isLeapYear(year){
  if(year % 4 == 0 && year % 100 == 0  && year % 400 == 0){
    return "It's a leap year";
  }
  else if(year % 100 != 0){
    return "It's a leap year";
  }
  else{
    return "It's not a leap year";
  }
}
console.log(isLeapYear(2100));

var guestList = ["Jai", "Jhilu", "Rando"];
console.log(guestList);
console.log(guestList.length);
console.log(guestList[0]);
var guestName = prompt("What is your name?");
if(guestList.includes(guestName)){
  alert("Welcome!");
}else{
  alert("Sorry, next time");
}

var output = [];
var count = 1;

function fizzBizz(){
  if(count %3 == 0 && count %5 == 0){
    output.push("fizzBizz");
  }
  else if(count %3 == 0){
    output.push("Fizz");
  }
  else if(count %5 == 0){
    output.push("Bizz");
  }
  else{
    output.push(count);
  }
  count++;
}

function whosPaying(names){
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today!";
}

function fizzBizz(){
  for(var count = 100; count  > 1; count--){
    if(count %3 == 0 && count %5 ==0){
      output.push("FizzBizz");
    }
    else if(count %3 == 0){
      output.push("Fizz");
    }
    else if(count %5 == 0){
      output.push("Bizz");
    }
    else{
      output.push(count);
    }
  }
}

console.log(output);

function fibSeries(n){
  var output = [];

  if(n === 1){
    output[0];
  }
  else if(n == 2){
    output = [0,1];
  }
  else{
    output = [0,1];

    for(var i = 2; i < n; i++){
      output.push(output[output.length -2] + output[output.length-1]);
    }
  }

  return output;
}
