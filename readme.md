Link to play game : https://tssongy.github.io/Project-1-Tic-Tac-Toe/

# Project 1: The Game (tic tac toe)

My first project with General Assembly as part of Software Engineering Immersive with the following deliverables:

- Render a game in the browser
- Switch turns between more than one player
- Design logic for winning & visually display which player won
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) principles
- Use Javascript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use semantic markup for HTML and CSS (adhere to best practices)

And some extra features!

# Tic Tac Toe
'Tic Tac Toe' is a strategy game between two players who, in turn, place their mark on the board. To win a game of tic tac toe, a player must place their marks, filling out a row, column, or a diagonal row.

## Approach to problem (planning)
Pseudocode was used in planning for the logics within javascript.

    1. Creating a board (3 x 3 or 5 x 5, 7 x7) depending on the player's choice
    -> JS was used to generate the required number of rows and columns which were appended to the 'board' element. Event listeners were assigned as each space was created. CSS was used to display the grid with necessary borders.

    2. Distinguishing between two different players (marks)
    -> The click listener for each box had to display a different mark depending on whose turn it was. 'Event bubbling' idea was used to toggle a class ('firstplayer') of the board (parent) element. Each event listener was created to check if the board element had the 'firstPlayer' and display a relevant mark on the target clicked.

    3. Checking for Wins and draws
    -> As per the winning condition of tic tac toe, each row, column, and diagonal row had to be checked with every click event on every box. Loops were used to achieve this. A boolean variable was also used for each winning condition that was initially set to 'true' and assigned 'false' if any condition was not met.


## Cool tech used
    - Animation (breathing) applied to the active player's H1 tag
    - Animation (fadeIn) applied to the board when setting up the board for play

## Lessons you learnt
    - Take absolute baby steps in planning and testing and build on the basics
    - Building on basics is easier and less time-consuming than coming up with a complicated logic at once.
    - Writing each step down/Talking out loud when iterating through multiple loops/functions
    - Console.log EVERYTHING when writing new functions (baby steps)
    - Leave majority of CSS for later but a static white page can be discouraging at times. Add basic CSS featured if you can afford to!

## Future features
    - Thematic audio with a stop and play button
    - 'Rain drop' animation on the grid
    - Clicking sound on all buttons
    - VS A.I feature