"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

function drawHeart(x, y) {
    context.beginPath();
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x + 40, y - 15, x, y + 20);
    context.moveTo(x, y - 10);
    context.bezierCurveTo(x, y - 25, x - 40, y - 15, x, y + 20);
    context.fill();
}

function drawClover(x, y) {
    Utils.fillCircle(x - 10, y + 5, 10);
    Utils.fillCircle(x + 10, y + 5, 10);
    Utils.fillCircle(x, y - 10, 10);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();

}

function drawPike(x, y) {
    context.beginPath();
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x + 40, y + 20, x, y + 10);
    context.moveTo(x, y - 20);
    context.bezierCurveTo(x, y - 30, x - 40, y + 20, x, y + 10);
    context.fill();
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + 5, y + 20);
    context.lineTo(x - 5, y + 20);
    context.fill();
}

function drawDiamond(x, y) {
    context.beginPath();
    context.moveTo(x - 20, y);
    context.lineTo(x, y - 20);
    context.lineTo(x + 20, y);
    context.lineTo(x, y + 20);
    context.fill();
}