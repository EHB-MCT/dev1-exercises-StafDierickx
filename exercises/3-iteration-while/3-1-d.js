"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalLines();
}

function drawDiagonalLines() {
    const mid =  (300/2)+50
    console.log("mid="+mid)
    let i = 0;
    while (i <= 7) {
        let offset = i*(300/2)/7

        Utils.drawLine(mid+offset, 50+offset, 50+offset, mid+offset);
        i++
    }
}