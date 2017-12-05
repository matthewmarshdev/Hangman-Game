var words = ['rickroll', 'nyancat', 'orly', 'feelsbadman', 'joebiden', 'rick_sanchez'];
var wordGetter = math.floor(math.random() * 10);
var score = 0;
var questionIndex = 0;
var amountOfGuesses = 0;

// for the 'rickroll' object
var rickPic = document.getElementById("astley")

    var rickroll = {
        image: rickPic;
        link: "put a link here",
        song: "put a link here",
        mileage: 3000,
        isWorking: true,
        },

renderQuestion();
updateScore();

//start the game, let the computer choose the word 
function wordChoice() {

    //loop over the pre-determined word choices
    for (var i = 0; i < words.length(); i++) {
        //first word selected
    }

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

}

document.onkeyup = function(event) {

    // If there are no more questions, stop the function.
    if (wordsIndex === word.length) {
        return;
    }

    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();








    //this should be an entire code block for each word
    // Only run this code if "t" or "f" were pressed.
    if (userInput === "t" || userInput === "f") {

        // If they guess the correct answer, increase and update score, alert them they got it right.
        if (userInput === questionsArray[questionIndex][1]) {
            alert("Correct!");
            score++;
            updateScore();
        }
        // If wrong, alert them they are wrong.
        else {
            alert("Wrong!");
        }

        // Increment the questionIndex variable and call the renderQuestion function.
        questionIndex++;
        renderQuestion();

    }

};