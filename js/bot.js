

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
let playerBot = []

let playerOneColor = 'radial-gradient(#773535e0, #120101e1)' //player colors
let playerBotColor = 'radial-gradient( #265779dd, #010a18dd)'

let playerOneWins = 0 //player win counts
let playerBotWins = 0 

let playerIdPick = '' //the id of box that player picked each round
let boxId = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']
let timeoutID = null



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
            playerTurn = "Bot"
            timeoutID = setTimeout( botPlay, 500 )  
            $('#playerTurn').text(`It's Player Bot turn!`)
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

        if (playerTurn === "One") {

            $(this).css('background', playerOneColor)    
            $(this).css('pointer-events', 'none')
            
            //obtain box ID and push into player's array, announce other player's turn and make it other player's turn
            playerIdPick = $(this).attr('id')
            playerOne.push( playerIdPick ); 
            // console.log(`playerOne's array ${playerOne}`)

            //call the botPlay function here everytime a player done its turn
            timeoutID = setTimeout( botPlay, 500 )  
            playerTurn = "Bot"
            $('#playerTurn').text(`It's Player Bot turn!`)

            //if playerOne win, function with playerOne argument
            if ( gameWin(playerOne) ) { 

                //all boxes will become unclickable, playOne score will +1, the reset button and winning announcement will appear
                clearTimeout (timeoutID)
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
        } 

        })
        

    
} // play function

play()

//=======================================================================

//function for executing bot play
const botPlay = function () {

    if (playerTurn === "Bot") {

    //first loop splice to remove player's chosen id 
    for (let i = 0; i < boxId.length; i++) {
        if (playerIdPick === boxId[i]) {
            boxId.splice([i], 1)
        }
    }

    let randomNum = Math.floor( Math.random() * boxId.length )
    playerIdPick =  boxId[randomNum] 

    //second loop splice to remove bot's chosen id
    for (let i = 0; i < boxId.length; i++) {
        if (playerIdPick === boxId[i]) {
            boxId.splice([i], 1)
        }
    }
    console.log(playerIdPick)

    $(`#${playerIdPick}`).css('background', playerBotColor)
    $(`#${playerIdPick}`).css('pointer-events', 'none')
    playerBot.push( playerIdPick ); 
    playerTurn = "One"
    $('#playerTurn').text(`It's Player One turn!`)

    if ( gameWin(playerBot) ) { 

        //all boxes will become unclickable, playBot score will +1, the reset button and winning announcement will appear
        $('.box').css('pointer-events', 'none')
        playerBotWins ++
        $('#pBotWinCount').text(`${playerBotWins}`)
        $('#announcement').css('visibility', 'visible').text(`Player Bot wins!`)
        $('#boardReset').css('visibility', 'visible')

        //condition for best of 3
        if (playerBotWins === 3) {
            $('#announcement').text(`Player Bot wins the grand connect 3 game!`)
            $('#gameReset').css('visibility', 'visible')
            $('#boardReset').css('visibility', 'hidden')
        }

    } else if ( playerBot.length === 5 && gameWin(playerBot) !== true ) {
        $('#announcement').css('visibility', 'visible').text(`It's a draw!`)
        $('#boardReset').css('visibility', 'visible')
        
    }
}
}

//===================================================================

//reset button to reset game board, internal js stuff ie arrays, reset clickability etc
const resetBoard = function () {

    $('#boardReset').on('click', function() {
        $('.box').css( 'background', 'radial-gradient(#b6b3addd, #f1ebe4dd)' )
        $('.box').css('pointer-events', 'none')
        $('#announcement').text('')
        $('#boardReset').css('visibility', 'hidden')
        $('#whoseTurn').css('visibility', 'visible')
        $('#playerTurn').text(``)
        boxId = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']
        playerOne = []
        playerBot = []
    })  
}

resetBoard()

//==================================================================


