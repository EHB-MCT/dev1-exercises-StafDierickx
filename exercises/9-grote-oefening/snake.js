// docs: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

const gridSise = 20;
const speed = 50

const xDimention = Math.floor(width / gridSise);
const yDimention = Math.floor(height / gridSise);
let direction = "right";
let frame = 0;

console.log(yDimention);

///// player and score setup

let score = 0;

let point = {
    x: Utils.randomIntBetween(1, xDimention - 1),
    y: Utils.randomIntBetween(1, yDimention - 1),
};
let player = {
    x: Math.floor(1),
    y: Math.floor(1),
    tailx: [-1],
    taily: [1],
};

// console.log(player.x)

for (let i = 0; i < xDimention; i++) {
    const x = i * gridSise;
    if (i % 2 == true) {
        Utils.fillRectangle(x, 0, gridSise, gridSise, "red");
    } else {
        Utils.fillRectangle(x, 0, gridSise, gridSise, "blue");
    }
}
for (let i = 0; i < yDimention; i++) {
    const y = i * gridSise;
    if (i % 2 == true) {
        Utils.fillRectangle(0, y, gridSise, gridSise, "red");
    } else {
        Utils.fillRectangle(0, y, gridSise, gridSise, "blue");
    }
}

///// event listener

window.addEventListener("keydown", (e) => {
    const key = e.key;

    // if (key) {
    //     console.log(key)
    // }
    if (key == "ArrowUp") {
        direction = "up";
    } else if (key == "ArrowDown") {
        direction = "down";
    } else if (key == "ArrowLeft") {
        direction = "left";
    } else {
        direction = "right";
    }
});

///// main loop

setup();
update();

draw();

function setup() {}

function update() {
    frame++
    if (frame %speed == false) {
        frame = 0
        draw()
    }
    window.requestAnimationFrame(update);
}

function draw() {
    Utils.clearCanvas();

    // check if player is on point
    if (point.x == player.x && point.y == player.y) {
        pickpoint();

        player.tailx.push(player.x);
        player.taily.push(player.y);
    }

    // NOT DONE
    // check if player is on player
    for (let i = 0; i < player.tailx.length; i++) {
        if (player.x == player.tailx[i]) {
            
        }
    }

    // player movement
    playerMove();

    // draw point
    Utils.fillCircle(
        point.x * gridSise + gridSise / 2,
        point.y * gridSise + gridSise / 2,
        gridSise / 2,
        "green"
    );

    // draw player
    drawPlayer()

    // console.log(player.y, yDimention);
    
}

function playerMove() {
    // update tail
    for(let i=player.tailx.length-1; i > 0; i--) {
        player.tailx[i] = player.tailx[i-1]
        player.taily[i] = player.taily[i-1]
    }
    player.tailx[0] = player.x
    player.taily[0] = player.y

    // update head
    if (direction == "up") {
        player.y += -1;
    } else if (direction == "down") {
        player.y += 1;
    } else if (direction == "left") {
        player.x += -1;
    } else {
        // right
        player.x += 1;
    }
    outOfBounds();


}

function outOfBounds() {
    const x = player.x;
    const y = player.y;

    if (x < 0) {
        player.x = xDimention;
    } else if (x > xDimention) {
        player.x = 0;
    }

    if (y < -1) {
        player.y = yDimention;
    }
    if (y > yDimention + 1) {
        player.y = 0;
    }
}

function drawPlayer () {
    Utils.fillRectangle(
        player.x * gridSise,
        player.y * gridSise,
        gridSise,
        gridSise,
        "blue"
    );

    for(let i=0; i < player.tailx.length; i++) {
        Utils.fillRectangle(
            player.tailx[i] * gridSise,
            player.taily[i] * gridSise,
            gridSise,
            gridSise,
            "blue"
        );
    }
}

function pickpoint() {
    let clearX = false;
    let clearY = false;

    let newX = 0;
    let newY = 0;

    if (!clearX) {
        clearX = true;
        newX = Utils.randomIntBetween(1, xDimention - 1);

        player.tailx.forEach((x) => {
            // check if x point touches player
            if (x == newX) {
                clearX = false;
            }
        });
    }

    if (!clearY) {
        clearY = true;
        newX = Utils.randomIntBetween(1, xDimention - 1);

        player.tailx.forEach((x) => {
            // check if x point touches player
            if (x == newX) {
                clearX = false;
            }
        });
    }
}
