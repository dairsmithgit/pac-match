// need array to hold all of the images needed to play game
// since it is a matching game, array contains 2 copies of each image
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

console.log(cardFronts);

// array for cards that are opened (or flipped) as the game is played
// array starts out empty

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