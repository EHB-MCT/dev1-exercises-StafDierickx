"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    const mid =  (300/2)+50
    console.log("mid="+mid)
    while (i <= 7) {
        let offset = i*(300/2)/7

        Utils.drawLine(mid+offset, 50+offset, 50+offset, mid+offset);
        Utils.drawLine(mid-offset, 50+offset, 350-offset, mid+offset);
        i++
    }
}