# Crystal Collector

Crystal Collector is a game where the object is earn points by clicking on different crystals and match the goal score without going over.

## Live Version

Go [here](http://crystalodi.github.io/week-4-game/) to view the app. 

## About the Application

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Install the following programs if they aren't on your local machine.

GIT - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Installing

Open your terminal and clone [this](http://github.com/week-4-game/week-4-game.git) repository to your computer. 

```
git clone http://github.com/week-4-game/week-4-game.git

```

Navigate to the `/week-4-game` directory with your terminal

```
cd week-4-game
```

Open file explorer from the `/week-4-game` directory

```
explorer .
```

Open the `index.html` file by double clicking on it. The app will open in a web browser and should look like this:

<img src="https://raw.githubusercontent.com/crystalodi/week-4-game/master/assets/images/home.png">

### Folder Structure
After following the instructions in the installation section, the contents of the `/week-4-game` will look like this

```
C:.
│   index.html
│   README.md
│
└───assets
    ├───css
    │       reset.css
    │       style.css
    │
    ├───images
    │       blue.png
    │       crystals.png
    │       game_stats.png
    │       green.png
    │       home.png
    │       losses.png
    │       orange.png
    │       red.png
    │       wins.png
    │
    └───javascript
            game.js
```
* `index.html` contains the ui for the application.
* `assets/css/reset.css` removes any default styling applied by web browsers
* `assets/css/style.css` Contains styling for game.
* `assets/javascript/game.js` Contains logic to generate random numbers for Crystals To Collect, Current Score, and points that represent what each crystal is worth. Also increments counters used to track the number of wins and losses.

## How to Play
When `index.html` is loaded, `assets/javascript/game.js` will generate a random number between 19 and 120 inclusive, which will represent the number of Crystals To Collect

<img src="https://raw.githubusercontent.com/crystalodi/week-4-game/master/assets/images/game_stats.png">

`assets/javascript/game.js` will also generate 4 random numbers between 1 and 12, for each crystal. Each time one of these crystals is clicked, the random number generated for that crystal will be added to the Crystals Collected score. The user will only know what each crystal is worth by clicking on it.

<img src="https://raw.githubusercontent.com/crystalodi/week-4-game/master/assets/images/crystals.png">

You win the game if you match your Crystals Collected score with the Crystals to Collect number. The Wins number will be incremented by 1.

<img src="https://raw.githubusercontent.com/crystalodi/week-4-game/master/assets/images/wins.png">

You lose the game if your Crystals Collected score is greater than the Crystals to Collect number. The losses number will be incremented by 1.

<img src="https://raw.githubusercontent.com/crystalodi/week-4-game/master/assets/images/losses.png">


## Built With

* HTML
* jQuery
* JavaScript
* CSS

## Authors

* **Crystal Odi** - *Initial work* - [crystalodi](https://github.com/crystalodi)


## Acknowledgments

* jQuery Documentation
* Mozilla Developer's Network

