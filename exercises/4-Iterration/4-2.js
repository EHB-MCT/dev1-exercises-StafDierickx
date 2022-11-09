"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

console.log("4-2.js")

const width = context.canvas.width
const height = context.canvas.height
console.log("width "+ width)
console.log("height "+ height)

const amountBubbles = 100
const minSize = 10
const maxSize = 70
const margin = 200

randomBubbles()

function randomBubbles() {
    for(let i=0; i < amountBubbles; i++) {
        const x = Utils.randomIntBetween(margin, width-margin) 
        const y = Utils.randomIntBetween(margin, height-margin)
        const radius = Utils.randomIntBetween(minSize, maxSize)

        Utils.fillCircle(x, y, radius, Utils.randomRGBA())
        
    }
}