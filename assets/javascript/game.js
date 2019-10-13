// Min/Max 19-120
let randomMin = 19;
let randomMax = 120;

// Crystal min max
let crystalMin = 1;
let crystalMax = 12;

let wins = 0;
let losses = 0;
let cryst1;
let cryst2;
let cryst3;
let cryst4;
let playerScore = 0;
reset();


function playerWin() {
    if ((playerScore == random)) {
        wins++;
        update(1);
        reset();
        console.log('win');
    }
    if ((playerScore > random)) {
        losses++;
        update(1);
        reset();
        console.log('loser');
    }
}

function update() {
    const html =
        "<p>Random: " + random + "</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Player Score: " + playerScore + "</p>"
    //call html
    $('.crystalGame').html(html)
}

//resetting the random score and player score while keeping number of wins and losses unchanged
function reset() {
    playerScore = 0;
    crystArray = [cryst1, cryst2, cryst3, cryst4,]
    crystArray.forEach(function (value, index) {
        value = Math.floor(Math.random() * (crystalMax - crystalMin)) + +crystalMin
        console.log('Crystal${index+1}: ${value}'); //triggers the function whenever the player clicks that specific button, increments the score and calls the two other functions 
        document.getElementById('gem${index+1}').onclick = function () {
            playerScore += value;
            update();
            playerWin();

        }

    })

    random = Math.floor(Math.random() * (+randomMax - +randomMin)) + +randomMin;
    update();
    console.log("Random Number Created : " + random);
    console.log("Computer guess reset", random);


}