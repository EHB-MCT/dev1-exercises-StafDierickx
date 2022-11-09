"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawBlockyGradient();
    context.strokeRect(50, 50, 300, 300);

}

function drawBlockyGradient() {
    let i = 0;
    while (i < 5) {
        const offset = (300/5)*i
        console.log(i)
        console.log(offset)

        context.fillStyle = Utils.rgb(6, i);
        console.log(Utils.rgb(6, i))
        context.fillRect(50+offset, 50, 300/5, 300);
        i++
    }
}