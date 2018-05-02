const Letter = function(assignedCharacter){
    this.character = assignedCharacter;
    this.isRevealed = false;
};

Letter.prototype.toString = function(){
    return (this.isRevealed ? this.character : "_")
};

Letter.prototype.guess = function( candidate ){
    if(candidate.toLowerCase() === this.character.toLowerCase()){
        this.isRevealed = true;
        return this
    } else {
        return this
    }
};

module.exports = Letter;