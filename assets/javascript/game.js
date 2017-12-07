
//--------------------------------------------------------------------------------**/	
	words  = ['rickroll', 'nyancat', 'orly', 'feelsbadman', 'joebiden',
			 'rick_sanchez', 'trump'];


    //preset variables
	letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','u','r','t','u','v','w','x','y','z',];
	guesses = 7;
	messages = {
		win: 'Prepare for MEME! Nice win bruh',
		lose: 'No meme for u bruh. google it',
		guessed: 'Already did that one. You ok?',
		valid: 'Pick a letter. Just dont pick Z.',
	};

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

      if (userGuess = "a") {

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }	

      for (var p = 0; p < words.length; p++ ){
        var item = words[Math.floor(Math.random()*words.length)];

      }

    function myFunction() {
    document.getElementById("CorrectGuess").innerHTML ='xx';
}
}

//-----------------------------------------------------------------------------//
//start the game, let the computer choose the word 




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
    // Only run this code if "t" or "f" were pressed.
  

        // If they guess the correct answer, increase and update score, alert them they got it right.
  
        // If wrong, alert them they are wrong.


