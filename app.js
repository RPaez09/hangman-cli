const Word = require("./objects/Word");
const inquirer = require("inquirer");

const Game = {
    wordBank : ['Javascript', 'Express', 'Node', 'Sequelize', 'Mongoose', 'React', 'jQuery'],
    currentWord : null,
    score : 0,
    guessed : [],
    init: function() {
        console.log(`Welcome to the UNC Coding bootcamp CLI-Hangman Game! \nToday's topic: Languages and Libraries!`);
        this.newWord();
    },
    newWord: function() {
        if( this.wordBank.length !== 0 ){
            this.currentWord = this.wordBank.pop();
        } else {
            //gameover
        }
    }
};

Game.init();