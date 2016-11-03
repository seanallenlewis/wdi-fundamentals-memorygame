console.log("JS file is connected to HTML! Woo!")

var cardOne = 'King';
var cardTwo = 'Queen';
var cardThree = 'King';
var cardFour = 'Queen';

var choiceOne = cardTwo; 
var choiceTwo = cardFour;



var createCards = function() {
	var gameBoardId = document.getElementById('game-board');
	var NumOfCards = y;

	for (var x = 0, x < 4, x++){
		var newCardItem = document.createElement('div');
		newCardItem.className = 'card';
		gameBoardId.appendChild(newCardItem);
		
	}
};

createCards();

/* commented out 'if' statement
if (choiceOne === choiceTwo) {
alert('You Found A Match!');
} else {
	alert('Sorry, try again.');
} */

