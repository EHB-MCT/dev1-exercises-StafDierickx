"use strict";
import context from "./context.js";

/**
 *  drawn line between 2 points
 * @param {Number} x0 x coordinate of starting point
 * @param {Number} y0 y coordinate of starting point
 * @param {Number} x1 x coordinate of end point
 * @param {Number} y1 y coordinate of end point
 */

export function drawLine (x0, y0, x1, y1) {
    context.beginPath();
    context.moveTo(x0, y0)
    context.lineTo(x1, y1)
    context.stroke()
}

export function strokeCircle (x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.stroke()
}