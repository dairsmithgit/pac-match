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


// array to store the opened cards as the game plays out

let openedCards = [];

// **********************
// query selector for the cards div and all of the cards

// variable to keep track of the # of matches

// shuffle cards on load (function shuffle)

// **********************
// FUNCTIONS FOR GAME
// **********************
// function to shuffle
// function to show positions of cards at the start of the game
// function comparing two flipped cards to determine match or no match
// function for things to do if the cards match
// function to return cards to flipped over state (doable within the compare function?)
// function to reset the opened cards array to empty
// function for things to do when the game is finished