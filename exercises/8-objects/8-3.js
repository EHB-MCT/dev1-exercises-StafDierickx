"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

console.log("8-1.js");

let width = context.canvas.width;
let height = context.canvas.height;

const min = -50;
const max = 50;

let objects = [];

setup(111);
update();

function setup(count) {
    // setup an array of objects
    for (let i = 0; i < count; i++) {
        const object = {
            color: Utils.randomRGBA(),
            Center: {
                x: Utils.randomIntBetween(0, width),
                y: Utils.randomIntBetween(0, height),
            },
            p1: {
                x: Utils.randomIntBetween(min, max),
                y: Utils.randomIntBetween(min, max),
            },
            p2: {
                x: Utils.randomIntBetween(min, max),
                y: Utils.randomIntBetween(min, max),
            },
            p3: {
                x: Utils.randomIntBetween(min, max),
                y: Utils.randomIntBetween(min, max),
            },
        };

        objects.push(object);
    }
}

function update() {
    Utils.clearCanvas(); // clear canvas

    for (let i = 0; i < objects.length; i++) {
        // read and update obect values in an array
        const object = objects[i];
        const color = object.color;
        const Center = object.Center;
        let p1 = {
            x: object.Center.x + object.p1.x,
            y: object.Center.y + object.p1.y,
        };
        let p2 = {
            x: object.Center.x + object.p2.x,
            y: object.Center.y + object.p2.y,
        };
        let p3 = {
            x: object.Center.x + object.p3.x,
            y: object.Center.y + object.p3.y,
        };

        p1.x = p1.x + Utils.randomDoubleBetween(-10, 10);
        p1.y = p1.y + Utils.randomDoubleBetween(-10, 10);

        p2.x = p2.x + Utils.randomDoubleBetween(-10, 10);
        p2.y = p2.y + Utils.randomDoubleBetween(-10, 10);

        p3.x = p3.x + Utils.randomDoubleBetween(-10, 10);
        p3.y = p3.y + Utils.randomDoubleBetween(-10, 10);

        // console.log(p1);

        draw(p1, p2, p3, color);
    }
    // console.log(objects[0].Center)
    window.requestAnimationFrame(update);
}

function draw(p1, p2, p3, color = "blue") {
    // console.log(color)
    context.fillStyle = color;

    // Utils.fillCircle(p1.x, p2.x, 50, color)
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineTo(p3.x, p3.y);
    context.closePath();
    context.fill();
}
