//Array of the characters/words
let characters = [
  "ariel",
  "belle",
  "elsa",
  "goofy",
  "woody",
  "flik"
];

for(let i = 0; i < characters.length; i++) {
  console.log(characters[i]);

}


let wins = 0;
let losses = 0;
let guesses = 0; 


//Display Image
//Display Wins and Losses starting at 0
//Display number of Guesses starting at 12
//Number of Guesses go down
//Update HTML with the letter they typed, either update word lines or display as wrong guessed letter
//Display already guessed letters on HTML
//If user guesses the word increase wins by 1
//If user does not guess word increase losses by 1
//Display new image and word

//Picks a word and creates lines based on the length of the word, writes it to HTML
let words = characters[Math.floor(Math.random() * characters.length)];
let answerLines = [];
for (let i = 0; i < words.length; i++) {
  answerLines = answerLines + "_ ";
}
document.getElementById("answerLines").innerHTML = answerLines;

let lettersGuessed = [

]

//When a user selects a key it logs it to console and writes it to HTML
document.onkeydown = logKey;

function logKey(e) {
  for (let i = 0; i < lettersGuessed.length; i++){
    if(e.key == lettersGuessed[i]) {
    }
  }

  lettersGuessed.push(e.key);
  console.log(e.key);
  document.getElementById("guessedLetter").innerHTML = lettersGuessed;

}











