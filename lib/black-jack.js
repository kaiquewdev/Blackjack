(function () {
    // Calls
    var root = this,
        vodevil = require('vodevil');

    // Environment specs
    if ( typeof exports !== 'undefined' ) {
        Blackjack = exports;
    }

    // Blackjack.cards
    var Cards = Blackjack.cards = function () {
        var self = this;

        self = {
            aces: 1,
            two: 2,
            tree: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            ten: 10,
            queen: 10,
            jack: 10,
            king: 10
        };
                
        return self;
    };
    
    // Blackjack.cardName
    var CardName = Blackjack.cardName = function ( name ) {
        var self = this;

        self['name'];
        self['value'];

        var cardsNameList = new Cards(); 

        if ( typeof name !== 'undefined' ) {
            var names = Object.keys( cardsNameList );

            if ( vodevil.in( names, name ) ) {
                self[ 'name' ] = name;
                self[ 'value' ] = cardsNameList[ name ];
            }
        }

        return self;
    };
    
    // Blackjack.card
    var Card = Blackjack.card = function ( options ) {
        var self = this;

        self['name'] = '';
        self['nipe'] = '';
        self['value'] = '';
        self['color'] = '';

        if ( options ) {
            for ( var key in options ) {
                if ( key in self ) {
                    self[ key ] = options[ key ];    
                }    
            }
        }

        return self;
    };

}).call( this );
