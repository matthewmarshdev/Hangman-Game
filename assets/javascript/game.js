//--------------------------------------------------------------------------------


//place to set global variables

//create dictionary, object used to search for values, interact with keys, and values

var gameDictionary = {
    'rickroll': 'never gonna give you up',
     'nyancat': 'inspiration for nyanborghini',
     'orly' : 'the most-curious owl',
     'feelsbadman': 'always feels the worst',
     'joebiden' : 'always feels the worst',
     'ricksanchez' : 'alcoholic scientist grandpa',
     'trump': 'orange ape, wrote art of the deal.'
};



//this array chooses a random word from above
var keyArray = Object.keys(gameDictionary);
var word = keyArray[Math.floor(Math.random() * keyArray.length)];
var wordObject = {}; 
var wordArray = word.split("");
var wrongGuess = [];
var lives = 5;
var count = 0;
var remainingLetters = word.length;
var getHint = document.getElementById("hint");

//this is the function for starting the game. it selects the word,
//joins the empty array with the word length and 
//1 create an array and split it
//each letter 


function startGame(){  
    console.log(word);
    wordArray.forEach((letter) => { 
        wordObject[letter] = false;
    });

    displayWord();
}

      

function displayWord() {

    var displayVal = '';
    wordArray.forEach((letter)  => {
        if(wordObject[letter]){
            displayVal += " " + letter + " ";
        } else {
            displayVal += ' __ ';
        }

    });
	console.log(displayVal);
	document.getElementById("hiddenWord").innerHTML = displayVal;
}

//this function is for selecting the letter, and either 
//assigning it to the 
//'correct' array, or assigning it to the incorrect guess array 

document.onkeyup = function(event){
    if(wordArray.includes(event.key)){
       wordObject[event.key] = true;
       displayWord();
       console.log(event.key);
    } else {
        wrongGuess.push([event.key]);
        lives -= 1;
        document.getElementById("wrongGuess").innerHTML = wrongGuess.join(' ');
        document.getElementById("livesLeft").innerHTML = lives;
    }


}


/**this shows the amount of lives left, and displays it. if var 'lives' gets
below 1, displays game over. if letter counter plus remaining spaces equals
guesses, you win is displayed!
I need a function that compares the lives left, and if that hits 0 before 
the word is guessed, it displays game over
if the word is guessed before lives hit 0, display you win!**/

function livesLeft(lives){

    if (lives < 1){
       document.getElementById("winOrLose").innerHTML = "You Lose"; 
    }
    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray.length > 1) {
            winOrLose.innerHTML = "You Win!";
            reset();
        }
    }
    
};


//This function resets the game when the reset button is clicked
function reset() {

	var wordObject = [];
    var dispVal = [];
    var answerArray = [];
    var wrongGuess = []
    var lives = 5;
    document.getElementById("hiddenWord").innerHTML = displayVal;
}




/**This function is for showing a hint. it aligns with the index of the chosen word,
and binds to it. 
hint.onclick = function(){
    var hint = hints;
    var hintIndex = wordArray.indexOf();
    showClue.innerHTML = "Clue: - " +  hint[hintIndex];
};**/








//-----------------------------------------------------------------------------//



//loop over the pre-determined word choices
//first word selected
//populate the blank spaces according to the length of the selected word, and render
//that many blank spaces
//have a count of total guesses of each word  before failure, which is the length 
//of each word +5
//use a  click event to listen for the keystroke
//if a correct key is struck, populate blank value with the correct key
//if an incorrect key is struck, add it to a list of incorrect keys, and stop 
//listening or using that key
//if word is completed before the user runs out of guesses, they win.
//if user wins, image populates left section, as well as meme info, link, and music
//if user doesnt win, populate left side with  mario over spikes
//record number of wins a losses
//if number of wins hits 5, tell them they are meme gods.
//if number of wins is over 30 and their win/loss ratio is above 80%, show special 
//meme and music
// If there are no more questions, stop the function.
// Determine which key was pressed, make it lowercase, and set it to the userInput variable.
//this should be an entire code block for each word
// If they guess the correct answer, increase and update score, alert them they got it right.
// If wrong, alert them they are wrong.