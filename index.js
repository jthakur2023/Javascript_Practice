function test(){
    //var myName = "Angela";
    //alert(myName);

  //  var yourName = prompt("What is your name?");

    var gamelevel = 1;
    gamelevel = 2;
    gamelevel =3;


    var a  = '3';
    var b = '8';
    var c = a;
    a = b;
    b = c;

    console.log('a is ' + a);
    console.log('b is ' + b);

    var my123 = 123;


    var message = "hey";
    //var name = "jai";

    //console.log(message + " " + name);

    var tweet = prompt("Compose your tweet");
    var tweetUnder140 = tweet.slice(0,140);
    alert(tweetUnder140);
    //or
    alert(prompt("Compose our tweet: ").slice(0,140));
    //var tweetCount = tweet.length;
    alert("You have written "+ tweet.length + "characters, you have " + (140-tweet.length) + "characters remaining");


    name.toUpperCase();



    var name = prompt("What is your name?");
    var firstChar = name.slice(0,1);
    var upperCaseFirstLetter = firstChar.toUpperCase();
    var restOfName = name.slice(1,name.length);
    var capitalName = upperCaseFirstLetter + restOfName;
    alert("Hello" + capitalName);

    /////////////////////////////////////////////////////

    var dogAge = prompt("How old r u");
    var humanAge = dogAge - 2  * 4 + 21;
    alert("Your dog is "+humanAge+ " years old in human years ");


}
