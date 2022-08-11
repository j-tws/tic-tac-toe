#**Connect.3, aka Tic-Tac-Toe**

This project is based on a simple game of tic-tac-toe, where there will be two players eventually taking turns to place their marks a 3 x 3 grid. Your objective is to connect 3 of your marks in either horizontal, vertical, or diagonal direction.


##Game modes

Upon visiting the home page there will be two playable modes for you to choose from, one being a local 2-player mode where you compete with another person. The other mode is where you will play with a very simple programmed bot. 

####2-player mode

In the page of the 2-player mode, there will be a brief description that informs the players on some simple instructions. The player first choose internally which player / color they would like to be. 

Once that is sorted either player will proceed to click on the button below the description, where it will decide whose turn to go first and the game immediately starts. Each player take turns to hover around the board and click on the cell they would like to place their marks. 

The possible outcomes of each round are a win/lose, or a draw. An announcement of the game will appear below the board whenever a round is finished, stating which player had won the game, or whether is it a draw. A button will appear along with the announcement to reset the board, and consecutively the choose player turn button will appear for the next round. 

The overall game of Connect.3 ends when a player has win it's best of 3 rounds. The total win scores of each player will be seen on the left and the right of the board. Once a player has win 3 rounds altogether, a game reset button will appear to refresh the whole page, resetting everyone's score back to 0.

####Simple bot mode

The gameplay and mechanics of the simple bot mode is similar to the 2-player mode, except you will be playing against a straightforward programmed bot. Please note that this bot does not have any form of algorithm nor artificial intelligence in it. Each time the player has placed it marks the bot will pick any random available spot on the board and place it marks. 

The objective to win the game is identical to the 2-player mode, where the player with best of 3 rounds win the whole game.

##**Project background**

This is my very first project that I built after intensively learning front-end web fundamentals for two weeks. Language used in this project are HTML, CSS and Javascript. Additional JQuery library is being applied to this project as well.

####Thoughts / lessons behind this project:
* The ability to apply Javascript fundamentals to program the front-end of a product. I.e `functions`, `loops`, `objects`, `DOM`, etc.

* The ability to produce a layout for navigation with consideration of aesthetics by using HTML and CSS.

* Exercising logical thinking by solving various puzzles along the way. I.e. for the tic-tac-toe game:

    - How do I register a win of tic-tac-toe in code for the computer? By pattern recognition, or comparing `id`s of picked cell with win conditions?

    - How do I make sure that the each player can not mark a spot that is already taken? I.e. once a cell is marked, that cell is no longer clickable again.

    - Announcement feature that display which player won after each round and which player start first in the beginning of each round

    - Since player place marks by clicking, how do I make a computer play it's mark since they will not be clicking? 

    - BONUS: Added a simple background by utilizing CSS animation and keyframes feature.


##FUTURE FEATURES
* An extreme intelligent bot, preferably undefeatable by utilizing Minimax algorithm

* Local storage capabilities, so that players will not lose their score after refresh

* Probably a list of avatars that players can choose from rather than just stuck to red and blue color

* Online feature!!!

