/*
    App: First JavaScript Application
    Author: Bob
    Date: 02/04/23
*/

// Allow the user to enter their guess
let num = prompt('Guess a number between 1 and 10');

// Check to see if the number is a winner
if (num == 5) {
    // If it is, they got it right
    alert('You guessed the right number!');
} else {
    // If it isn't, they got it wrong
    alert('You guessed the wrong number!');
}