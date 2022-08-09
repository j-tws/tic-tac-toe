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
    

const compareArray = function(playerArray) {
    for (let i = 0; i < condition.length; i++) {
        const winConditions = condition[i] //variable for win position loop
        // console.log(winConditions)

        let winCounter = 0
        for (let j = 0; j < winConditions.length; j++) {   //looping through each element in each array
            
            if ( playerArray.includes( winConditions[j] ) === true ) {
                winCounter ++

                if ( winCounter === 3 ) {
                    return true
                }
            }            
        }// win condition for the each position in the triplet
    } return false
}


//global variables
let playerTurn = "One"
let playerOne = [] //empty arrays to collect Ids as data for win conditions
let playerTwo = []


const play = function () { 

    //click handler
    $('.box').on('click', function() {

        if (playerTurn === "One") {
            $(this).css('background-color', 'red')
            $(this).css('pointer-events', 'none')

            playerOne.push( $(this).attr('id') ); //obtain box ID and push into array
            console.log(`playerOne's array ${playerOne}`)
            playerTurn = "Two"

            if ( compareArray(playerOne) ) { //if playerOne wins
                $('#frame').css('pointer-events', 'none')
                console.log(`YAY`)
            }
            
        } else if (playerTurn === "Two") {
            $(this).css('background-color', 'green')
            $(this).css('pointer-events', 'none')
            
            playerTwo.push( $(this).attr('id') );
            console.log(`playerTwo's array ${playerTwo}`)
            playerTurn = "One"

            if ( compareArray(playerTwo) ) {
                $('#frame').css('pointer-events', 'none')
                console.log(`YAY`)
            }
    
        }
    })
    
    
} // play function

play()



//as a player click, get the ID box and push it to their player array


//4. Once clicked, you cannot click on it again

//5. every second click, it will change a different look from the first click

//6. find a way to detect each row and column? how to know if a row is filled with the same look/image to register a win?

//Set each box an ID
//set condition to win! ie [a1, a2, a3], [b1, b2, b3]...
//every click of the box, you get the ID and push into an array/object, the moment an array/obj contains the win conditions, you win!

//7. figure out how to decide a draw
//8. make a reset button to reset the board


