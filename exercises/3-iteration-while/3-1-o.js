"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradient();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);

}

function drawGradient() {
    let i = 0;
    while (i <= 10) {
        let gray = 255;
        context.strokeStyle = Utils.rgb(gray, gray, gray);
        Utils.drawLine(0, 0, 0);
        i++;
    }
}