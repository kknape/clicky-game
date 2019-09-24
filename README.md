# Clicky Game App
Play [The Clicky Game](https://kknape.github.io/clicky-game)!

## What is the Clicky Game app?
The Clicky Game app is a simple memory game where the user tries to click each image once without clicking any image twice. The app will track the users number of cards clicked in the current round and the most cards clicked in any one round.

## The Clicky Game will...

- Prompt the user to click an image
- If the image has not yet been clicked, the user gets a point and the cards shuffle.
- If the image has already been clicked, the cards shake and suffle and the score resets to zero.
- If the user guesses all the cards correctly, a "You Won!" message will display and the game is reset.

## How the app was created

- This project utilizes React
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Boostrap styling
- Hosted on git hub pages

## How the app is structured

- Main game logic is in the app component
- Header elements are in the nav component
- Card rendering is in the Game Card componet

## How to Use the App

- Home page is displayed. Click an image to get started.
  - ![User Selects Prompt](https://github.com/kknape/clicky-game/blob/master/images/Start_Game.png)
- When you guess correctly and click an image that has not yet been clicked, you get a point and the cards shuffle.
  - ![User Selects Prompt](https://github.com/kknape/clicky-game/blob/master/images/Guess_correct.png)
- When you guess incorrectly by clicking an image twice, the cards shake and shuffle and the score resets to zero. Click an image to try again. The Top Score will update if your score surpasses the current Top Score.
  - ![User Selects Prompt](https://github.com/kknape/clicky-game/blob/master/images/Guess_incorrect.png)
- If you correctly click all images only once, you win! The game will reset so you can try it again.
  - ![User Selects Prompt](https://github.com/kknape/clicky-game/blob/master/images/Win_Game.png)
