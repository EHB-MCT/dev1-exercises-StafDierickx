"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

console.log("8-1.js")

let width = context.canvas.width;
let height = context.canvas.height;

let objects = []


setup(8)
update()

function setup(count) { // setup an array of objects
    for(let i=0; i<count; i++){
        const object = {
            color: Utils.randomRGB(),
            x: Utils.randomIntBetween(0, width),
            y: height,
            speed: Utils.randomIntBetween(1,5)
        }

        objects.push(object)
    }
}

function update() {
    Utils.clearCanvas() // clear canvas

    for(let i=0; i<objects.length; i++) { // read and update obect values in an array
        const object = objects[i]
        const color = object.color
        const xPos = object.x + Utils.randomIntBetween(-4, 4)
        const yPos = object.y - object.speed

        // update x, y value of object in array
        objects[i].x = xPos
        objects[i].y = yPos

        draw(xPos, yPos, color)
    }
    
    window.requestAnimationFrame(update)
}

function draw(x, y, color) {
    // Utils.fillRectangle(0,0,width,height,"blue")
    Utils.drawLine(x, y, x, y+100, "white")
    Utils.fillCircle(x, y, 50, color)
}


length = objects.length
console.log(length)
console.log(objects[1].color)