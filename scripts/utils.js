"use strict";
import context from "./context.js";

const width =  context.canvas.width
const height = context.canvas.height

export function canvasColor(color) {
    context.fillStyle = color;
    context.fillRect(0, 0, width, height);
}

/**
 *  drawn line between 2 points
 * @param {Number} x0 x coordinate of starting point
 * @param {Number} y0 y coordinate of starting point
 * @param {Number} x1 x coordinate of end point
 * @param {Number} y1 y coordinate of end point
 */

export function drawLine (x0, y0, x1, y1, color="black") {
    console.log("drawing line from:"+ x0 +" "+ y0 +" to "+ x1 +" "+ y1)
    context.beginPath();
    context.strokeStyle = color
    context.moveTo(x0, y0)
    context.lineTo(x1, y1)
    context.stroke()
}


export function drawRectangle(x0 ,y0, x1 ,y1, color="#000000") {
    context.fillStyle = color

    context.beginPath()
    context.rect(x0, y0 ,x1, y1)
    context.stroke()
}

export function fillrectangle(x0 ,y0, x1 ,y1, color="#000000") {
    context.fillStyle = color

    context.beginPath()
    context.fillRect(x0, y0 ,x1, y1)
    context.stroke()

}


export function fillCircle (x, y, radius, color="#000000") {
    console.log("drawing circle("+ x +" "+ y +" "+ radius +", "+ color +")")
    
    context.fillStyle = color
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.closePath()
    // context.stroke()
    context.fill()
} 

// draw circle
export function strokeCircle (x, y, radius, color="#000000") {
    console.log("drawing circle("+ x +" "+ y +" "+ radius +", "+ color +")")
    
    context.strokeStyle = color
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, true);
    context.closePath()
    context.stroke()
    // context.fill()
}

/**
 * get a B&W rgb value back from a gradient
 * @param {number} steps number of steps for gradient 
 * @param {*} iteration step count to be returned
 */

export function rgb(steps, iteration) {
    steps = 255/steps
    const value = steps*iteration
    const rgb = "rgb("+ value +", "+ value +","+ value +")"
    return rgb
}

export function randomRGB() {
    const r = Math.round(255*Math.random())
    const g = Math.round(255*Math.random())
    const b = Math.round(255*Math.random())
    
    return "rgb("+ r +","+ g +","+ b +")"
}

export function randomRGBA() {
    const r = Math.round(255*Math.random())
    const g = Math.round(255*Math.random())
    const b = Math.round(255*Math.random())
    const a = Math.random()
    
    return "rgba("+ r +","+ g +","+ b +","+ a +")"
}

export function randomIntBetween(min, max) { // generate number wetween 2 given number
    return Math.floor(Math.random() * (max - min + 1) + min)
}