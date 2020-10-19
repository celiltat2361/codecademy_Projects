const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput ==='rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }else{
      console.log('Error!');
    }
  }
  //console.log(getUserChoice('paper'))
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
      return 'rock';
    }else if(randomNumber === 1){
      return 'paper';
    }else {
      return 'scissors';
    }
    }
    //console.log(getComputerChoice());
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb'){
      return 'You won!!!'
    }
    if(userChoice === computerChoice){
     
        return 'The game is a tie!';
      }
    
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer won!';
      }else {
        return 'You won!';
      } 
    }
     
     if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'The computer won!';
      }else {
        return 'You won!';
      }
    }
     if(userChoice === 'scissorsr'){
      if(computerChoice === 'rock'){
        return 'The computer won!';
      }else {
        return 'You won!';
      }
    }
  }  
  //console.log(determineWinner('paper', 'scissors'))
  //console.log(determineWinner('paper', 'paper'));
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`you are: ${userChoice}`);
    console.log(`computer is: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame()