jQuery.widget('llapgoch.sinewave', {
    options: {
        text: '',
        minDelayBetweenWord: 100,
        maxDelayBetweenWord: 1000,
        minDelayBetweenLetter: 10,
        maxDelayBetweenLetter: 100,
        minInitialDelay: 2000,
        maxInitialDelay: 8000,

        maxBlur: 10,
        wordSeparator: ' ',

        letterWrap: '<span />'
    },



    wordElements: null,
    beginTimeout: null,

    _create: function() {
        this.words = this.options.text.split(this.options.wordSeparator);
        this.wordElements = [];

        this.begin();
    },

    _generateRand: function(min, max){
        return Math.floor((Math.random() * (max - min)) + min);
    },

    _nextLetter: function() {
        this.letterNumber++;

        if(this.letterNumber >= this.options.text.length){
            return;
        }

        if(this.options.text[this.letterNumber] == '')
    },

    _clearBeginTimeout: function() {
        if(this.beginTimeout){
            window.clearTimeout(this.beginTimeout);
        }
    },

    begin: function() {
        this._clearBeginTimeout();
        this.beginTimeout = this._delay(this._nextLetter, this._generateRand(this.options.minInitialDelay, this.options.maxInitialDelay));
    }
});