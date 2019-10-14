// Min/Max 19-120
let randomMin = 19;
let randomMax = 120;

// Crystal min max
let crystalMin = 1;
let crystalMax = 12;
let random = 0;
let wins = 0;
let losses = 0;
let crystal1;
let crystal2;
let crystal3;
let crystal4;
let playerScore = 0;
// reset();

// let targetScore = $("<div>");
// targetScore.text(random);
// $("#ali").append(targetScore);

function playerWin() {
    if ((playerScore == random)) {
        wins++;
        update();
        // reset();
        console.log('win');
    }
    if ((playerScore > random)) {
        losses++;
        update();
        // reset();
        console.log('loser');
    }
}

function update() {
    let html =
        "<p>Random: " + random + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Player Score: " + playerScore + "</p>"
    //call html
    $('.crystalGame').html(html)
    //document.querySelector('#crystalGame').innerHTML = html;
}

//resetting the random score and player score while keeping number of wins and losses unchanged
// function reset() {
playerScore = 0;

crystalArray = [crystal1, crystal2, crystal3, crystal4,]

for (let i = 0; i < crystalArray.length; i++) {

    // crystalArray.forEach(function (value, index) {
    value = Math.floor(Math.random() * (crystalMax - crystalMin)) + crystalMin
    // console.log('Crystal${index+1}: ${value}'); //triggers the function whenever the player clicks that specific button, increments the score and calls the two other functions 
    // document.getElementById('Crystal${index+1}').onclick = function () { //an error here and line 53

    playerScore += value;
    update();
    playerWin();

    // }
}
// })

random = Math.floor(Math.random() * (+randomMax - +randomMin)) + +randomMin;
update();
console.log("Random Number Created : " + random);
console.log("Computer guess reset", random);

// }