

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

let playerTurn = "One" //player turns

let playerOne = [] //empty arrays to collect Ids as data for win conditions
let playerTwo = []

let playerOneColor = 'radial-gradient(#773535e0, #120101e1)' //player colors
let playerTwoColor = 'radial-gradient( #265779dd, #010a18dd)'

let playerOneWins = 0 //player win counts
let playerTwoWins = 0
//To further DRY up code, convert this scoreboard into an object (pass by ref into argument in function)

$('.box').css('pointer-events', 'none')


//===================================================================

// set up who starts the match

const whoseTurn = function () {
    
    $('#whoseTurn').on('click', function(){

        $('.box').css('pointer-events', 'auto') //opens up the board after clicking button

        const randomNum = Math.floor( Math.random() * 2 )
        if (randomNum === 0) {
            playerTurn = "One"
            $('#playerTurn').text(`It's Player One turn!`)
            // console.log('one')
        } else if (randomNum === 1) {
            playerTurn = "Two"
            $('#playerTurn').text(`It's Player Two turn!`)
            // console.log('two')
        }

        $('#whoseTurn').css('visibility', 'hidden') //hides the button after board opens
    })

}

whoseTurn()


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

//function for the overall gameplay
const play = function () { 

    //click handler for any box
    $('.box').on('click', function() {

        //if it is player one's turn
        if (playerTurn === "One") {

            //change clicked box background, and make box unclickable after clicking
            $(this).css('background', playerOneColor)    
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
            $(this).css('background', playerTwoColor)
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
        $('.box').css('pointer-events', 'none')
        $('#announcement').text('')
        $('#boardReset').css('visibility', 'hidden')
        $('#playerTurn').text(``)
        $('#whoseTurn').css('visibility', 'visible')
        playerOne = []
        playerTwo = []
    })  
}

resetBoard()

//==================================================================

