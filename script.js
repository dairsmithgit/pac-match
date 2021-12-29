// array for imgs of each card, 2 of each because it is a matching game
// this array will be shuffled at the start of the game

const cardFronts = [
    "public/images/apple.png",
    "public/images/cherry.png",
    "public/images/strawberry.png",
    "public/images/orange.png",
    "public/images/red-ghost.png",
    "public/images/pink-ghost.png",
    "public/images/blue-ghost.png",
    "public/images/orange-ghost.png",
    "public/images/pacman.png",
    "public/images/ghost-chase.png",
    "public/images/apple.png",
    "public/images/cherry.png",
    "public/images/strawberry.png",
    "public/images/orange.png",
    "public/images/red-ghost.png",
    "public/images/pink-ghost.png",
    "public/images/blue-ghost.png",
    "public/images/orange-ghost.png",
    "public/images/pacman.png",
    "public/images/ghost-chase.png"
]

// DO NOT shuffle on load. makes it a headache to restart the game without page refresh.
// create function(s) that begin game when start is clicked and resets to starting state on reset click


// array to store the opened cards as the game plays out
let openedCards = [];

// keeps track of pairs found, determines when the game is finished
let matchCount = 0;

// selects the card container for manipulation
const cardsContainer = document.querySelector('.cards');

// variable that selects and stores all indiv. cards for manipulation
let cards = document.querySelectorAll('.card');

// function to shuffle cards --- call this function on press of the start button
function shuffleCards(array) {

    let currentIndex = array.length, tempValue, randomNumber;

    while (currentIndex !== 0) {
        randomNumber = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomNumber];
        array[randomNumber] = tempValue;
    }
    return array;
}

// function to show the cards at the beginning of the game
function showCards(card) {
    for (card of cards) {
        card.src = cardFronts[card.getAttribute('data-index')];
    }
    setTimeout(() => {
        for (card of cards) {
            card.classList.remove('flipCard');
            card.src = 'public/images/card-back.jpeg';
            setTimeout(() => {
            }, 100);
        }
    }, 3000);
}

// function to compare the cards and check for a match
function compareCards() {
    let card1 = openedCards[0];
    let card2 = openedCards[1];

    if (cardFronts[card1.getAttribute('data-index')] === cardFronts[card2.getAttribute('data-index')]) {
        return matched(cardFronts[card1.getAttribute('data-index')]);
    } else {
        return flipCardBack();
    }
}

// function defines what to do when the card1/card2 attributes match (cards are a matching pair)
function matched(card) {
    matchCount++;
    setTimeout(() => {
        for (card of openedCards) {
            card.classList.add('matched');
        }
    }, 1500);

    if (matchCount === 9) {
        // game over function
    }
    setTimeout(() => {
        openedCards = [];
    }, 1510);
}

// function to flip the card back over if it is not a match
function flipCardBack() {
    setTimeout(() => {
        for (card of openedCards) {
            card.classList.remove('flipCard');
            card.classList.add('flipCardBack');
        }
    }, 1500);
    setTimeout(() => {
        for (card of openedCards) {
            card.classList.remove('flipCardBack');
        }
    }, 1530);
    // check if the card is removed properly
    console.log(openedCards);

    setTimeout(() => {
        openedCards = [];
    }, 1540);
}

// adding listener to cards in the cardDiv which will handle class changes and calling compare function

// **********************

// instead of the matched cards added to a div with insertHTML (bad practice)
    // put icons of each card in a div somewherre with visibility hidden - the icon will become visible if the match is made
        // this gives the player visual representation of what matches they've found and can be ruled out

// look up how to replace/change elements of css within the same class using javascript

// **********************
// FUNCTIONS FOR GAME
// **********************
// function to shuffle  *DONE*
// function to show positions of cards at the start of the game *DONE*
// function comparing two flipped cards to determine match or no match *DONE*
// function for things to do if the cards match *DONE*
// function to return cards to flipped over state (doable within the compare function?) *DONE*
// function to reset the opened cards array to empty *DISCARDED*
// function for things to do when the game is finished


// NOTABLE CHANGES TO THIS APP COMPARED TO EARLIER ITERATION FROM GC BOOTCAMP
// **************************************************************************
// nothing inserting HTML, just to keep away from the practice
    // instead, reveal elements using css that accomplish the same visual objective for the user
        // (showing which pairs are removed from the board so player can keep track)

// no reset openedCards function, it is easier to just set the array to empty in the other functions instead of calling a function that does it

// considered setting up the ifMatch and ifNotMatch cases inside of the compare function, but didn't
    // want the compare function to get messy and to be doing more than it needed to