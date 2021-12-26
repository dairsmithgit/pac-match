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

// **********************
// query selector for the cards div and all of the cards

// variable to keep track of the # of matches

// shuffle cards on load (function shuffle)

// **********************
// FUNCTIONS FOR GAME
// **********************
// function to shuffle  *DONE*
// function to show positions of cards at the start of the game *DONE*
// function comparing two flipped cards to determine match or no match
// function for things to do if the cards match
// function to return cards to flipped over state (doable within the compare function?)
// function to reset the opened cards array to empty
// function for things to do when the game is finished