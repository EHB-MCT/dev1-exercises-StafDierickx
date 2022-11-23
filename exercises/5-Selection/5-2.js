"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

console.log("5-2.js")

const width = context.canvas.width
const height = context.canvas.height
console.log("width "+ width)
console.log("height "+ height)

for (let i = 0; i < width; i +=20) {
    for (let ii = 0; ii < height; ii+=20) {
        const opt = Math.round(Utils.randomIntBetween(0,1)) 
        console.log(opt)

        const color = Utils.randomRGB()

        if (opt == 0) {
            Utils.drawLine(i, ii, i+20, ii+20, color)
        } else {
            Utils.drawLine(i+20, ii, i, ii+20, color)
        }
    }
}