
// Definition of variables

let plyNum = 0;
let plyName = '';
let plyOption = 0;

/* OPTIONS CODE:
*  0 = Rock    1 = Paper    3 = Scissors     7 = Lizard     20 = Spock
*/

/**
 * Function Aleathory option from Computer
 * @returns comOption - int number 
 */
function comOption () {
const numbers = [0, 1, 3, 7, 20];
randomIndex = Math.floor(Math.random() * numbers.length);
comOption = numbers[randomIndex];
return(comOption);
}

/** 
 * Play algorithm. 
 * We have thougth in all possible cases, and then, we  have reduced 
 * cases by uniting "player 1 wins" in the default case. (And then we could quit all
 * the return(2) in every case and do a multiple case)
 * @param plyOption - Player Option
 * @param comOption - Computer Otion
 * @returns - Player Number who wins (or 0 if TIE)
*/
function play (plyOption, comOption) {

    result = plyOption - comOption;
    switch (result) {
        case 0:
            return(0);
        case -1:
        /*case 1:
            console.log('Player 1 wins');
            break;*/
        /*case -3:
            console.log('Player 1 wins');
            break;*/
        case 2:
        /*case -7:
            console.log('Player 1 wins');
            break;*/
        case 7:            
        case -20:                            
        /*case 20:
            console.log('Player 1 wins');
            break;*/
        case -2:        
        /*case 2:
            console.log('Player 1 wins');
            break;*/
        case -6:
        /*case 6:
            console.log('Player 1 wins');
            break;*/
        /*case -19:
            console.log('Player 1 wins');
            break;*/
        case 19:
        /*case -4:
            console.log('Player 1 wins');
            break;*/
        case 4:
        case -17:
        /*case 17:
            console.log('Player 1 wins');
            break;*/
        /*case -13:
            console.log('Player 1 wins');
            break;*/
        case 13:
            return(2);
        default:
            return(1);
    }
}

