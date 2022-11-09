"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

import * as start from "./5-3-start.js"

console.log("4-2.js")

const width = context.canvas.width
const height = context.canvas.height
console.log("width "+ width)
console.log("height "+ height)

drawCarts(10)

function drawCarts(cardAmount) {
    //in pixels
    const cardWidth = 100
    const cardHeight = 160
    const margin = 10

    let xPos = 0 - cardWidth - margin
    let yPos = 0

    for(let i = 0; i <= cardAmount; i++) {
        if (xPos+cardWidth > width) { // check if card is off canvas
            xPos = 0
            yPos += cardHeight + margin
        } else {
            xPos += cardWidth + margin
        }
        console.log("drawing card at: "+ xPos +", "+ yPos)
        Utils.drawRectangle(xPos, yPos, cardWidth, cardHeight)

        // Utils.drawRectangle(0,0, cardWidth, cardHeight)
    }
}