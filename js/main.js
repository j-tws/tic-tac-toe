
//LETSGO!!!!!!!!!!@@

//PSEUDOCODE
//1. Draw 9 boxes (9 divs?)
//2. Line them up in 3x3 line
//3. If 'click' on a box, the box will change look. Idea - add source?

//set up conditions for win

const condition = [['a1', 'a2', 'a3'],
                    ['b1', 'b2', 'b3'],
                    ['c1', 'c2', 'c3'],
                    ['a1', 'b1', 'c1'],
                    ['a2', 'b2', 'c2'],
                    ['c1', 'c2', 'c3'],
                    ['a1', 'b2', 'c3'],
                    ['a3', 'b2', 'c1']]
    

const test1 = ['a1', 'c3', 'b3', 'a2'] // lose
const test2 = ['b2', 'a1', 'a2', 'c1', 'c3'] //win
const test3 = ['c2', 'c3', 'a2', 'b2', 'c1'] //win



const compareArray = function(playerArray) {
    for (let i = 0; i < condition.length; i++) {
        console.log(condition[i])

        for (let j = 0; j < condition[i].length; j++) {
            console.log(condition[i][j])

            if ( playerArray.includes( condition[i][j] ) !== true ) {
                return `false`
            }
            
        }
        return `true`  
    } 
}

console.log (compareArray(test3))






// const test = [1,3,7]
// const test2 = [2,3,7,8,1,9,4,5]
// const test3 = [1,2,3,7,8,12]
// const test4 = [2,9,4,5]

// const compareArray = function(playArray, conditionArray) {
//     for (let i = 0; i < conditionArray.length; i++) {
//         if (playArray.includes(conditionArray[i]) !== true) {
//             console.log(conditionArray[i])
//             return `false`
//         } 
//     }
//     return `true`
// }

// console.log (compareArray(test2, test3))





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
            
        } else if (playerTurn === "Two") {
            $(this).css('background-color', 'green')
            $(this).css('pointer-events', 'none')

            playerTwo.push( $(this).attr('id') );
            console.log(`playerTwo's array ${playerTwo}`)
            playerTurn = "One"
            
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

//7. Not over yet...more to come. do up to 6 first




