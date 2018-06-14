function Player(name, roll, diceOne, diceTwo) {
  this.playerName = name;
  this.playerTurnScore = 0;
  this.playerOverallScore = 0;
  this.playerRoll = roll
  this.diceOne = diceOne;
  this.diceTwo = diceTwo;
}

Player.prototype.checkScore = function() {
  if (this.playerOverallScore >= 100)
  alert("YAY 100 points! You win!");
}

Player.prototype.bankScore = function() {
  this.playerOverallScore += this.playerTurnScore;
}

Player.prototype.rollDice = function() {
  this.diceOne = Math.floor((Math.random() * 6) + 1)
  this.diceTwo = Math.floor((Math.random() * 6) + 1)
  console.log(this.diceOne);
  console.log(this.diceTwo);
  this.playerRoll = this.diceOne + this.diceTwo
  if (this.playerRoll == 2) {
    this.playerOverallScore = 0;
    this.playerTurnScore = 0;
    alert("SNAKE EYES. Total score back to 0. :(")
  } else if (this.diceOne === 1 || this.diceTwo === 1) {
    this.playerTurnScore = 0;
    alert("Turn over. :( You rolled a 1.")
  } else if (this.diceOne === this.diceTwo) {
    this.playerTurnScore += (this.playerRoll += this.playerRoll);
    alert(this.playerName + "DOUBLE POINTS! You rolled a matching pair.")
  } else {
    this.playerTurnScore += this.playerRoll;
  }
}

$(document).ready(function() {
  var playerOne = new Player(name);
  var playerTwo = new Player(name);
  var computer = new Player();
  var playerOneVSComputer = new Player(name);

  $("#returnToHome").click(function(event) {
    event.preventDefault();
    $(".one-player-mode").hide();
    $(".two-player-mode").hide();
    $(".homepage").show();
    $(".rules-container").show();
    $(".mode-choice").show();
    $(".p1p2names").show();
    $("#rules-button").hide();
    $("#returnToHome").hide();
  });

  $("#onePlayerMode").click(function(event) {
    event.preventDefault();
    $(".rules-container").hide();
    $(".one-player-mode").show();
    $(".two-player-mode").hide();
    $("#rules-button").show();
    $("#returnToHome").show();
    var playerOneVSComputerName = $("#playerOne").val()
    $("#playerOneVSComputerName").text(playerOneVSComputerName);
    $(".mode-choice").hide();
    $(".p1p2names").hide();
  });

  $("#twoPlayerMode").click(function(event) {
    event.preventDefault();
    $(".rules-container").hide();
    $(".two-player-mode").show();
    $(".one-player-mode").hide();
    $("#rules-button").show();
    $("#returnToHome").show();
    var playerOneName = $("#playerOne").val()
    $("#playerOneName").text(playerOneName);
    var playerTwoName = $("#playerTwo").val()
    $("#playerTwoName").text(playerTwoName);
    $(".mode-choice").hide();
    $(".p1p2names").hide();
  });

  function computerTurn() {
    console.log("computer turn is working");
    computer.rollDice();
    $("#computerRoll").text("You rolled a " + computer.diceOne + " and " + computer.diceTwo)
    if (computer.playerRoll == 2) {
      computer.playerOverallScore = 0;
      computer.playerTurnScore = 0;
    } else if (computer.diceOne === 1 || computer.diceTwo === 1) {
      computer.playerTurnScore = 0;
    } else {
      computer.rollDice();
      $("#computerRoll").append("<br>You rolled a " + computer.diceOne + " and " + computer.diceTwo)
    }
    computer.bankScore();
    $("#computerOverallTotal").text(computer.playerOverallScore);
    computer.playerTurnScore = 0;
    $("#computerTotal").text("Saved");
    computer.checkScore();
  }

// Player One Roll Button
  $("#playerOneButton").click(function(event) {
    event.preventDefault();
    playerOne.rollDice()
    // var playerOneName = $("#playerOne").val()
    // $("#playerOneName").text(playerOneName);
    $("#playerOneRoll").text("You rolled a " + playerOne.diceOne + " and " + playerOne.diceTwo);
    $("#playerOneTotal").text(playerOne.playerTurnScore);
    $("#playerOneOverallTotal").text(playerOne.playerOverallScore);
  });

// Player One Hold Button
  $("#playerOneHold").click(function(event) {
    event.preventDefault();
    playerOne.bankScore();
    $("#playerOneOverallTotal").text(playerOne.playerOverallScore);
    playerOne.playerTurnScore = 0;
    $("#playerOneTotal").text("Saved");
    playerOne.checkScore();
  });

// Player Two Roll Button
  $("#playerTwoButton").click(function(event) {
    event.preventDefault();
    playerTwo.rollDice()
    // var playerTwoName = $("#playerTwo").val()
    // $("#playerTwoName").text(playerTwoName);
    $("#playerTwoRoll").text("You rolled a " + playerTwo.diceOne + " and " + playerTwo.diceTwo)
    $("#playerTwoTotal").text(playerTwo.playerTurnScore);
    $("#playerTwoOverallTotal").text(playerTwo.playerOverallScore);
  });

// Player Two Hold Button
  $("#playerTwoHold").click(function(event) {
    event.preventDefault();
    playerTwo.bankScore();
    $("#playerTwoOverallTotal").text(playerTwo.playerOverallScore);
    playerTwo.playerTurnScore = 0;
    $("#playerTwoTotal").text("Saved");
    playerTwo.checkScore();
  });

//Player One vs. Computer Roll Button
  $("#playerOneVSComputerButton").click(function(event) {
    event.preventDefault();
    playerOneVSComputer.rollDice()
    console.log(playerOneVSComputer.playerRoll + " is the player's total");
    if (playerOneVSComputer.playerRoll == 2) {
      alert("SNAKE EYES. Total score back to 0. :(")
      computerTurn();
    } else if (playerOneVSComputer.diceOne === 1 || playerOneVSComputer.diceTwo === 1) {
      console.log("One is reached on player roll");
      playerOneVSComputer.playerTurnScore = 0;
      computerTurn();
    }
    // var playerOneVSComputerName = $("#playerOneVSComputer").val()
    // $("#playerOneVSComputerName").text(playerOneVSComputerName);
    $("#playerOneVSComputerRoll").text("You rolled a " + playerOneVSComputer.diceOne + " and " + playerOneVSComputer.diceTwo);
    $("#playerOneVSComputerTotal").text(playerOneVSComputer.playerTurnScore);
  });

//Player One vs. Computer Hold Button
  $("#playerOneVSComputerHold").click(function(event) {
    event.preventDefault();
    playerOneVSComputer.bankScore();
    $("#playerOneVSComputerOverallTotal").text(playerOneVSComputer.playerOverallScore);
    playerOneVSComputer.playerTurnScore = 0;
    $("#playerOneVSComputerTotal").text("Saved");
    playerOneVSComputer.checkScore();
    computerTurn()
  });
});
