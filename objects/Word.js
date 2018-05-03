const Letter = require("./Letter");

const Word = function( newWord ){
    let arr = newWord.split('');

    this.letters = arr.map( x => new Letter(x) );
    this.isSolved = false;
};

Word.prototype.toString = function(){
    return this.letters.join(' ');
};

Word.prototype.guess = function(candidate){
    this.letters = this.letters.map( letter => letter.guess(candidate) );
    this.check();
};

Word.prototype.check = function(){
    let unsolved = this.letters.filter( letter => !letter.isRevealed );
    this.isSolved = (unsolved.length === 0 ? true : false)
};

module.exports = Word;