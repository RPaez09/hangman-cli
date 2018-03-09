var Letter = function( assignedCharacter ){
    this.character = assignedCharacter;
    this.isRevealed = false;
}

Letter.prototype.render = function(){
    if( this.isRevealed ){
        return this.character
    } else {
        return "_"
    }
}

Letter.prototype.guess = function( candidate ){
    if( candidate === this.character ){
        this.isRevealed = true;
    }
}