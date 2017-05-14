var input = prompt("Please type a number");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * topNumber) + 1;
var message = "<h2>" + randomNumber + " is a number between 1 and " + topNumber + ".</h2>";
document.write(message);
