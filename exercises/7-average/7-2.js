"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

console.log("7-2.js")

let width = context.canvas.width;
let height = context.canvas.height;

let isActive = true
let xPos = []
let yPos = []

const speed = 0.5

setup();

draw();


function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";

    for (let i = 0; i < 5; i++) {
        xPos[i] = 50
        yPos[i] = ((height/5)*i)+50
        console.log('snail:'+ yPos[i])
    }
}

function draw() {
    let space = height / 5;

    // draw playspace
    drawnPlayspace()

    for (let i = 0; i < 5; i++) { 
        xPos[i] += Utils.randomDoubleBetween(0, speed) // move snail by x
        console.log("snail"+ i +" position: "+ xPos[i])
        // console.log("snailpos:"+ xPos[1])
        drawSnail(xPos[i], yPos[i], space, i) // draw snail

        // check if snail won
        if (xPos[i] > width-70) {
            console.log('snail '+ i +' won!')
            isActive = false

            context.fillText("snail "+ i +' won!', width/2, height/2)
            // window.cancelAnimationFrame(draw)
        }
    }
    
    if (isActive == true) {
        window.requestAnimationFrame(draw)
    }
}

function drawnPlayspace() {
    const space = height /5
    for (let i = 0; i<5; i++) {
        if (i %2) {
            Utils.fillRectangle(0, space*i, width, space, "red")
        } else {
            Utils.fillRectangle(0, space*i, width, space, '#7B7B7B')
        }
        
    }
}

//drawn snail
function drawSnail(x, y, sizeY, number) {

    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
}