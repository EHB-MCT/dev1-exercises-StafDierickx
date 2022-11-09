"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

const width = context.canvas.width
const height = context.canvas.height
console.log("width "+ width)
console.log("height "+ height)

const horizontalLines = 60
const verticalLines = 30

Utils.canvasColor("orange")
drawLinesX()
drawLinesY()

function drawLinesX() {
    const step = width / horizontalLines
    for(let i = 0; i <= horizontalLines; i++){
        Utils.drawLine(step*i, 0, width-(step*i), height, "white")
        context.draw
    }
}

function drawLinesY() {
    const step = height / verticalLines
    for(let i = 0; i < verticalLines; i++){
        Utils.drawLine(0, step*i, width, height-(step*i), "white")
        context.draw
    }
}