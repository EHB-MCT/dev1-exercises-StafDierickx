"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

console.log("6-1.js")

const width = context.canvas.width
const height = context.canvas.height
console.log("width "+ width)
console.log("height "+ height)

// window.onmousemove= DrawCrosshairs(evt)
window.onmousemove = DrawCrosshairs

function DrawCrosshairs(event) {
    Utils.drawLine(0,0, width, height)
    
    mousePos = getMousePos(event)
    console.log()
}

function getMousePos(event) {
    // for (let i = 0; i < event.length; i++) {
    //     console.log(i)
    //     console.log(toString(canvas[i]))
    // }
    
    var rect = canvas.getBoundingClientRect(); //get cavas info

    var mousePos = {
        x : event.clientX - rect.left,
        y : event.clientY - rect.right
    }

    const x = event.clientX - rect.left
    const y = event.clientY - rect.right
    
    // console.log(rect)
    console.log('xpos: '+ mousePos.x)
    return mousePos
}