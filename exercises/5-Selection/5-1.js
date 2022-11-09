"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

console.log("4-2.js")

const width = context.canvas.width
const height = context.canvas.height
console.log("width "+ width)
console.log("height "+ height)

for(let i = 1; i < 10000; i++) {
    drawDot()

}

function drawDot() {
    const xPos = Utils.randomIntBetween(1, width)
    const yPos = Utils.randomIntBetween(1, height)
    let color = "red"

    if (xPos > width/4 && yPos > height/4 && xPos < (width/4)*3 && yPos < (height/4)*3) {
        color = "green"
    }

    Utils.strokeCircle(xPos, yPos, 5, color)
}
