"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

console.log("4-2.js")

const width = context.canvas.width
const height = context.canvas.height
console.log("width "+ width)
console.log("height "+ height)

const colums = 10
const rows = 10
const minSize = 20
const maxSize = 20
// const margin = 200

gridBubbles()

function gridBubbles() {
    // const maxBubbles = (width / offset) + (height / offset)
    const col = width / colums
    const widthSteps = width / colums
    const heightSteps = height / rows

    for(let i=0; i < widthSteps; i++) { 
        const xPos = col*i
        
        for(let ii=0; ii < heightSteps; ii++) {
            const yPos = col*ii
            const radius = Utils.randomIntBetween(minSize, maxSize)
            Utils.fillCircle(xPos, yPos, radius, "rgba(0,0,255,0.5)")

        }
    }
}
