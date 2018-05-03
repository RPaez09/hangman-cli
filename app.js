const Word = require("./objects/Word");
const inquirer = require("inquirer");

const Game = {
    wordBank : ['Javascript', 'Express', 'Node', 'Sequelize', 'Mongoose', 'React', 'jQuery'],
    currentWord : null,
    score : 0,
    triesLeft: 10,
    guessed : [],
    init: function() {
        console.log(`Welcome to the UNC Coding bootcamp CLI-Hangman Game! \nToday's topic: Languages and Libraries!`);
        this.newWord();
        this.guess();
    },
    newWord: function() {
        if( this.wordBank.length !== 0 ){
            this.currentWord = new Word(this.wordBank.pop());
        } else {
            //gameover
        }
    },
    guess: function() {
        console.log(this.currentWord.toString());
        inquirer.prompt({
            name: "guess",
            type: "input",
            message: "Guess a letter"
        }).then( answer => {
            let guessedLetter = answer.guess.toLowerCase();
            if( this.guessed.indexOf( guessedLetter ) === -1 ){
                this.currentWord.guess(answer.guess);
                this.guessed.push(guessedLetter);
            } else {
                console.log("You've already guessed that letter, try again");
            }

            if( this.currentWord.isSolved ){
                this.score++;
                this.guessed = [];
                console.log(this.currentWord.toString());
                console.log(`Awesome! let's try a new word. Score: ${this.score}`);
                this.triesLeft = 10;
                this.newWord();
            }
            this.guess();
        });
    }
};

Game.init();