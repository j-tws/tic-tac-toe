//LETSGO!!!!!!!!!!@@


//PSEUDOCODE
//1. Draw 9 boxes (9 divs?)
//2. Line them up in 3x3 line
//3. If 'click' on a box, the box will change look. Idea - add source?



//set up conditions for win
const condition = [['a1', 'a2', 'a3'],      //0
                    ['b1', 'b2', 'b3'],     //1
                    ['c1', 'c2', 'c3'],     //2
                    ['a1', 'b1', 'c1'],
                    ['a2', 'b2', 'c2'],
                    ['a3', 'b3', 'c3'],
                    ['a1', 'b2', 'c3'],
                    ['a3', 'b2', 'c1']]     //7
    
//====================================================================


//global variables
let playerTurn = "One"
let playerOne = [] //empty arrays to collect Ids as data for win conditions
let playerTwo = []
let playerOneWins = 0
let playerTwoWins = 0

$('#playerTurn').text(`Start with Player ${playerTurn} turn!`)


//===================================================================


//function for winning the game with player as argument
const gameWin = function(playerArray) {
    for (let i = 0; i < condition.length; i++) {

        //variable for win position loop
        const winConditions = condition[i] 
        // console.log(winConditions)

        let winCounter = 0
        for (let j = 0; j < winConditions.length; j++) {   //looping through each element in each array
            
            if ( playerArray.includes( winConditions[j] ) === true ) {
                winCounter ++ //if a value is detected as true in the one of the arrays in the condition, it adds +1 to the win counter without breaking the loop

                if ( winCounter === 3 ) {
                    return true
                    //if win counter === 3, meaning all value is detected as true in the array because all arrays only have 3 values, and trigger the win
                } 
            }            
        }// win condition for the each position in the triplet
    } return false
}


//===================================================================


const play = function () { 

    //click handler for any box
    $('.box').on('click', function() {

        //if it is player one's turn
        if (playerTurn === "One") {

            //change clicked box background, and make box unclickable after clicking
            $(this).css('background', 'radial-gradient(#773535e0, #120101e1)')
            $(this).css('pointer-events', 'none')
            
            //obtain box ID and push into player's array, announce other player's turn and make it other player's turn
            playerOne.push( $(this).attr('id') ); 
            console.log(`playerOne's array ${playerOne}`)
            playerTurn = "Two"
            $('#playerTurn').text(`It's Player ${playerTurn} turn!`)

            //if playerOne win, function with playerOne argument
            if ( gameWin(playerOne) ) { 

                //all boxes will become unclickable, playOne score will +1, the reset button and winning announcement will appear
                $('.box').css('pointer-events', 'none')
                playerOneWins ++
                $('#pOneWinCount').text(`${playerOneWins}`)
                $('#announcement').css('visibility', 'visible').text(`Player 1 wins!`)
                $('#boardReset').css('visibility', 'visible')

                //condition for best of 3
                if (playerOneWins === 3) {
                    $('#announcement').text(`Player One wins the grand connect 3 game!`)
                    $('#gameReset').css('visibility', 'visible')
                    $('#boardReset').css('visibility', 'hidden')
                }
                
                //if it draws, announcement of draw will appear
            } else if ( playerOne.length === 5 && gameWin(playerOne) !== true ) {
                $('#announcement').css('visibility', 'visible').text(`It's a draw!`)
                $('#boardReset').css('visibility', 'visible')

            } 
            
        //if it is player two's turn    
        } else if (playerTurn === "Two") {
            //change box background, and make box unclickable after clicking
            $(this).css('background', 'radial-gradient( #265779dd, #010a18dd )')
            $(this).css('pointer-events', 'none')
            
            //obtain box ID and push into player's array, announce other player's turn and make it other player's turn
            playerTwo.push( $(this).attr('id') );
            console.log(`playerTwo's array ${playerTwo}`)
            playerTurn = "One"
            $('#playerTurn').text(`It's Player ${playerTurn} turn!`)
            
            //if playerTwo win, function with playerTwo argument
            if ( gameWin(playerTwo) ) {

                //all boxes will become unclickable, playOne score will +1, the reset button and winning announcement will appear
                $('.box').css('pointer-events', 'none')
                playerTwoWins ++
                $('#pTwoWinCount').text(`${playerTwoWins}`)
                $('#announcement').css('visibility', 'visible').text(`Player 2 wins!`)
                $('#boardReset').css('visibility', 'visible')

                //condition for best of 3
                if (playerTwoWins === 3) {
                    $('#announcement').text(`Player Two wins the grand connect 3 game!`)
                    $('#gameReset').css('visibility', 'visible')
                    $('#boardReset').css('visibility', 'hidden')
                }
                
                //if it draws, announcement of draw will appear
            } else if ( playerTwo.length === 5 && gameWin(playerTwo) !== true ) {
                $('#announcement').css('visibility', 'visible').text(`It's a draw!`)
                $('#boardReset').css('visibility', 'visible')
                
            }
        }
    })  
} // play function

play()

//===================================================================


const resetBoard = function () {

    //reset button to reset game board, internal js stuff ie arrays, reset clickability etc
    $('#boardReset').on('click', function() {
        $('.box').css( 'background', 'radial-gradient(#b6b3addd, #f1ebe4dd)' )
        $('.box').css('pointer-events', 'auto')
        $('#announcement').text('')
        $('#boardReset').css('visibility', 'hidden')
        playerOne = []
        playerTwo = []
    })  
}

resetBoard()

//==================================================================

//as a player click, get the ID box and push it to their player array


//4. Once clicked, you cannot click on it again

//5. every second click, it will change a different look from the first click

//6. find a way to detect each row and column? how to know if a row is filled with the same look/image to register a win?

//Set each box an ID
//set condition to win! ie [a1, a2, a3], [b1, b2, b3]...
//every click of the box, you get the ID and push into an array/object, the moment an array/obj contains the win conditions, you win!

//7. figure out how to decide a draw
//8. make a reset button to reset the board




//WEDNESDAY AGENDA
//include details: <----PROBABLY DO THIS ONE FIRST
//  a. give a button which will randomly select who goes first?
//  b. set game set objective ie best of 3?
//  c. announce who won the game clearly / game draw
//  d. announce whose turn it is


//set up css. make it presentable and pretty!
//  a. have some animation ie fade?
//  b. have a style / theme
//  c. presentable fonts, proper layout

//structure code:
//  a. DRY it up 
//  b. structure in a professional way? ie OOP.


//THURSDAY AGENDA
//ATTEMPT A BOT/ CONNECT FOUR