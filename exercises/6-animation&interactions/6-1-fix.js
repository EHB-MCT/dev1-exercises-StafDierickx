"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

console.log("6-1-fix.js")

const width = context.canvas.width
const height = context.canvas.height
console.log("width "+ width)
console.log("height "+ height)

// window.onmousemove= DrawCrosshairs(evt)
window.onmousemove = DrawCrosshairs