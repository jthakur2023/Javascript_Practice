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
