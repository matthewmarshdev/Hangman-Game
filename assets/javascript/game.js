
//--------------------------------------------------------------------------------


    //place to set global variables

	var wordArray  = ['rickroll', 'nyancat', 'orly', 'feelsbadman', 'joebiden',
			 'ricksanchez', 'trump'];
    var hints = ["never gonna give you up", "inspiration for nyanborghini", 
        "the most-curious owl", "always feels the worst", "best vice-p on earth", 
        "alcoholic scientist grandpa", "orange ape, wrote art of the deal.",
        
       ];

	//var letters = ['a','b','c','d','e','f','g','h','i','j','k',
	//				'l','m','n','o','p','q','u','r','t','u','v',
	//				'w','x','y','z'];

    //this array chooses a random word from above
	var word = wordArray[Math.floor(Math.random() * wordArray.length)];

    //place to set global variables
    var set;                              
    var count = 0;
    var lives ;                           // Lives
	var answerArray = [];
    var remainingLetters = word.length;
    var getHint = document.getElementById("hint");

    //this is the function for starting the game. it selects the word,
    //joins the empty array with the word length and 
	function startGame(){
        for (var i = 0; i < word.length; i++) {
    		answerArray[i] = "_";
		}
        set=answerArray.join(" ");
        document.getElementById("hiddenWord").innerHTML = set;
    }

    //this function is for selecting the letter, and either assigning it to the 
    //'correct' array, or assigning it to the incorrect guess array 
    function letter(){
       var letter = document.getElementById("letter").value;
            console.log(letter);
        if(letter.length > 0){
           for (var j = 0; j < randomWord.length; j++){
               if (randomWord[j]=== letter){
                answerArray[j] = letter; 
                }
            }
            count++
            document.getElementById("counter").innerHTML = "No of clicks" + count;
            document.getElementById("CorrectGuess").innerHTML = answerArray.join(" ")
        }
        if(count>5){
            document.getElementById("room").innerHTML = "Sryssssly??";
        }
    }

    //this shows the amount of lives left, and displays it. if var 'lives' gets
    //below 1, displays game over. if letter counter plus remaining spaces equals
    //guesses, you win is displayed!
    function comment(){
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
          showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < geusses.length; i++) {
          if (counter + space === geusses.length) {
            showLives.innerHTML = "You Win!";
          }
        }
    } 


    //This function is for showing a hint. it aligns with the index of the chosen word,
    /**and binds to it. 
    hint.onclick = function(){
        var hint = hints;
        var hintIndex = wordArray.indexOf();
        showClue.innerHTML = "Clue: - " +  hint[hintIndex];
    };**/


	//This function resets the game when the reset button is clicked
    document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
    }

	



    

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


