// OVERVIEW OF THE PLANNING

// 1. An input (play) for each of the two players is required and is to fill up one space on the board (Achieved by a click on the space)
// 2. Check if the input (play) is valid (i.e the space has not been marked previously). If not valid, do not initiate the next player's turn until a valid play.
// 3. If any one row OR column OR diagonal has been filled by a player, pause the game and display a message indicating the player's victory
// 4. If no row, column, and diagonal has been filled by one player, initiate the next player's turn
// 5. If there are no spaces left on the board (i.e all spaces have been filled by players' inputs), declare DRAW
// 6. Declare a counter variable that increments with each game played to let users know how many games have been played.
// 7. Declare a counter variable for each player that increments with their winnings respectively.
// 8. When the game ends, prompt the user if they would like to play again -> if YES, reset the board.



// BOARD LOGIC PLANNING
// 1. Enable user to choose the size of the board 3 x 3 or 5 x 5 or 7 x 7 (display these options for better UX)
// 2. Create a function that takes an integer as a parameter indicating the size of the board (e.g 3 or 5 or 7) 
// 3. This function is to generate the 'n' number of rows and columns or equal size on a grid display using DOM objects
// 4. 

// PLAYERS LOGIC PLANNING
// 1. Create an object for each player to store the player's name and the number of wins (anything else?)
// 2. Determine which player goes first
// 3. Each player will have a different mark on the board