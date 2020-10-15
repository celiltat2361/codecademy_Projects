let userName = prompt("Your name?");
userName.length == 0
  ? console.log("Hello!")
  : console.log(`Hello ${userName}!`);
let userQuestion = prompt("your question?");
console.log(`${userName} asked: ${userQuestion}`);
let eightBall = "";

let randomNumber = Math.floor(Math.random() * 7);

switch (randomNumber) {
  case 0:
    eightBall = ("It is certain");
    break;

  case 1:
    eightBall = ("It is decidedly so");
    break;

  case 2:
    eightBall = ("Reply hazy try again");
    break;

  case 3:
    eightBall = ("Cannot predict now");
    break;

  case 4:
    eightBall = ("Do not count on it");
    break;

  case 5:
    eightBall = ("My sources say no");
    break;

  case 6:
    eightBall = ("Outlook not so good");
    break;

  case 7:
    eightBall = ("Signs point to yes");
    break;

  default:
    console.log('no comment!');
    break;
}

alert(`The eight ball answered: ${eightBall}, ${userName}`);