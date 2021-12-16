// Added to git hub enterprise instead of git hub. previos commits bellow.

// from 12/16/21
// little background edit
// Zaki DurryZaki Durry
// Zaki Durry authored and Zaki Durry committed 2 days ago
// WE DID IT
// Zaki DurryZaki Durry
// Zaki Durry authored and Zaki Durry committed 2 days ago 
// Commits on Dec 14, 2021
// ALL ROUNDS WORK
// Zaki DurryZaki Durry
// Zaki Durry authored and Zaki Durry committed 2 days ago
// question 2 awards points
// Zaki DurryZaki Durry
// Zaki Durry authored and Zaki Durry committed 2 days ago
// part 1 works
// Zaki DurryZaki Durry
// Zaki Durry authored and Zaki Durry committed 3 days ago
// Commits on Dec 13, 2021
// still working on variables
// Zaki DurryZaki Durry
// Zaki Durry authored and Zaki Durry committed 3 days ago
// Commits on Dec 12, 2021
// set up reposttory
// Zaki DurryZaki Durry
// Zaki Durry authored and Zaki Durry committed 4 days ago



// Vairiables
let deckId = "something";
const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
const deckUrl = "https://deckofcardsapi.com/api/deck/"
const drawUrl = "/draw/?count=1"
let points = 0;
let cardOne = '';
let cardTwo = '';

// Element References
const $selectColor = $('span.color');
const $selectHiLow = $('span.hiLow');
const $selectOutIn = $('span.outIn');
const $selectSuit = $('span.suit');
const $shuffle = $('.shuffle');
const $imgs = $('div.imgs');

// Event Listerners 
$selectColor.on('change', handleGetGuess1);
$selectHiLow.on('change', handleGetGuess2);
$selectOutIn.on('change', handleGetGuess3);
$selectSuit.on('change', handleGetGuess4);
$shuffle.on('click', newSetup);



// Functions 

function newSetup(evt) {
    $.ajax(url).then(function (data) {
        deckId = data.deck_id;
        points = 0;
    })
    
    $('span.color').html(`
    <h3>${points}</h3>
     <p>Question #1</p>
 <select  class= "selector" name="color" id="color">
     <option value="" selected disabled>--Pick a color</option>
     <option value="red">Red</option>
     <option value="black">Black</option>
 </select> 
     `)

     $('div.imgs').html('')
     $('span.hiLow').html('')
     $('span.outIn').html('')
     $('span.suit').html('')


}
function handleGetGuess1(evt) {
    let choice = document.querySelector('.selector').value
    $.ajax(deckUrl + deckId + drawUrl).then(function (card) {
        cardSuit = card.cards[0].suit;
        if (cardSuit === "SPADES" || cardSuit === "CLUBS") {
            cardColor = "black";
        } else {
            cardColor = "red";
        }
        if (cardColor === choice){
            alert('WOOOOO!!!')
            points = (++points)
        } else {
            alert("BOOOOOO!!!")
        }
        cardId = card.cards[0].value;
        if (cardId === 0) {
            cardNum = 10;
        } else if (cardId === "JACK") {
            cardNum = 11;
        } else if (cardId === "QUEEN") {
            cardNum = 12;
        } else if (cardId === "KING") {
            cardNum = 13;
        } else if (cardId === "ACE") {
            cardNum = 14;
        } else {
            cardNum = cardId
        };

        cardOne = cardNum;

        $imgs.append(`<img src="${card.cards[0].image}" alt="${card.cards[0].Title}">`)

        $('span.color').html('')

        $('span.hiLow').html(`
        <h3>${points}</h3>
        <p>Question #2</p>
        <select  class= "selector" name="hiLow" id="hiLow">
        <option value="" selected disabled>--Higher or Lower</option>
        <option value="higher">Higher</option>
        <option value="lower">Lower</option>
        <option value="same">Same</option>
        </select> 
         `)

        
    })

}

function handleGetGuess2(evt) {
    let choice = document.querySelector('.selector').value
    $.ajax(deckUrl + deckId + drawUrl).then(function (card) {
        cardId = card.cards[0].value;
        if (cardId === 0) {
            cardNum = 10;
        } else if (cardId === "JACK") {
            cardNum = 11;
        } else if (cardId === "QUEEN") {
            cardNum = 12;
        } else if (cardId === "KING") {
            cardNum = 13;
        } else if (cardId === "ACE") {
            cardNum = 14;
        } else {
            cardNum = cardId;
        }

        cardTwo = cardNum;

        if (cardNum > cardOne) {
            hiLow = "higher"
        } else if (cardNum < cardOne) {
            hiLow = "lower";
        } else {
            hiLow = "same"
        }

        if (hiLow === choice){
            alert('WOOOOO!!!')
            points = (points+2)
        } else {
            alert("BOOOOOO!!!")
        }

        $imgs.append(`<img src="${card.cards[0].image}" alt="${card.cards[0].Title}">`)

        $('span.hiLow').html('')

        $('span.outIn').html(`
        <h3>${points}</h3>
        <p>Question #3</p>
        <select  class= "selector" name="outIn" id="outIn">
        <option value="" selected disabled>--Outside or In Between</option>
        <option value="out">Outside</option>
        <option value="in">In Between</option>
        <option value="same">Same</option>
        </select> 
         `)
    })
}

function handleGetGuess3(evt) {
    let choice = document.querySelector('.selector').value
    $.ajax(deckUrl + deckId + drawUrl).then(function (card) {
        cardId = card.cards[0].value;
        if (cardId === 0) {
            cardNum = 10;
        } else if (cardId === "JACK") {
            cardNum = 11;
        } else if (cardId === "QUEEN") {
            cardNum = 12;
        } else if (cardId === "KING") {
            cardNum = 13;
        } else if (cardId === "ACE") {
            cardNum = 14;
        } else {
            cardNum = cardId;
        }

        if (cardOne >= cardTwo) {
            highCard = cardOne;
            lowCard = cardTwo;
        } else {
           highCard = cardTwo;
           lowCard = cardOne;
        }

        if ( cardNum > highCard || cardNum < lowCard){
            outIn = "out";
        } else if  (cardNum < highCard && cardNum > lowCard) {
            outIn = "in";
        } else {
            outIn = "same";
        }

        if (outIn === choice){
            alert('WOOOOO!!!')
            points = (points+4)
        } else {
            alert("BOOOOOO!!!")
        }

        $imgs.append(`<img src="${card.cards[0].image}" alt="${card.cards[0].Title}">`)

        $('span.outIn').html('')

        $('span.suit').html(`
        <h3>${points}</h3>
        <p>Question #4</p>
        <select  class= "selector" name="suit" id="suit">
        <option value="" selected disabled>--Pick a Suit</option>
        <option value="HEARTS">Hearts</option>
        <option value="SPADES">Spades</option>
        <option value="DIAMONDS">Diamonds</option>
        <option value="CLUBS">Clubs</option>

        </select> 
         `)
    })
}

function handleGetGuess4(evt) {
    let choice = document.querySelector('.selector').value
    $.ajax(deckUrl + deckId + drawUrl).then(function (card) {
        cardSuit = card.cards[0].suit;
        if (cardSuit === choice){
            alert('WOOOOO!!!')
            points = (points+8)
        } else {
            alert("BOOOOOO!!!")
        }

        $imgs.append(`<img src="${card.cards[0].image}" alt="${card.cards[0].Title}">`)

        $('span.suit').html(`
        <h3>Your Final Score is ${points}!</h3>
        `)


    })

    }
