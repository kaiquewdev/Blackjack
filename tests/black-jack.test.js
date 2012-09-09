// Suite of tests for black jack game
var chai = require('chai'),
    assert = require('assert'),
    expect = chai.expect,
    should = chai.should(),
    Blackjack = require('../lib/black-jack');

suite('Test Black Jack', function () {
    suite('Cards', function () {
        var cards = new Blackjack.cards();    

        test('returned a object containing cards', function () {
            expect( cards ).to.deep.equal({
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
            });
        });
    });
    
    suite('Card name', function () {
        var cardName = new Blackjack.cardName('aces');    

        test('get a card by name', function () {
            expect( cardName ).to.deep.equal({
                name: 'aces',
                value: 1
            });
        });
    });
    
    suite('Card', function () {
        var card = new Blackjack.card(),
            cardSets = new Blackjack.card({
                name: 'aces',
                nipe: 'hearts',
                value: 1,
                color: 'red'
            });

        test('new card without definitions', function () {
            expect( card ).to.deep.equal({
                name: '',
                nipe: '',
                value: '',
                color: ''
            });
        });

        test('new card with configurations', function () {
            expect( cardSets ).to.deep.equal({
                name: 'aces',
                nipe: 'hearts',
                value: 1,
                color: 'red'
            });    
        });
    });
});