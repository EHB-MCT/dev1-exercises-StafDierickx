"use strict";
// import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

console.log("4-3.js")

const margin = 100
const padding = 10
const collums = 5
const rows = 5
const brickWidth = 100
const brickHeigth = 50
const brickOffset = brickWidth / 2

drawBricks()

function drawBricks() {
    // draw bricks y axis
    for (let i=0; i < rows; i++) {
        const yPos = margin + ((brickHeigth + padding) * i)
        const xOffset = margin + (brickOffset * (i %2))
        
        // drawn bricks x axis
        for(let ii = 0; ii < collums; ii++) {
            const x0 = margin + ((brickWidth + padding)*ii) + xOffset
            Utils.fillrectangle(x0 , yPos, brickWidth, brickHeigth, "red")
        }
    }
}