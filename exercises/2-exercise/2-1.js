"use strict";

//canvas settings
const canvas = document.getElementById("canvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

const context = canvas.getContext("2d"); //create 2d context

//variables
// const ctxWidth = context.canvas.width;
// const ctxHeight = context.canvas.height;

moreLines(0, 0, 500, 500)


function moreLines(x, y, width, height) {
    const totalX = x+width;
    // const totalY = height+y;

    context.beginPath();
    // debug
    // context.rect(x, y ,width, height)

    context.moveTo(x, y);
    context.lineTo(totalX, y);
    context.lineTo(x, y+height*(1/4));
    context.lineTo(totalX, y+height*(1/4))
    context.lineTo(x, y+height*(2/4))
    context.lineTo(totalX, y+height*(2/4))
    context.lineTo(x, y+height*(3/4))
    context.lineTo(totalX, y+height*(3/4))
    context.lineTo(x, y+height)
    context.lineTo(totalX, y+height)
    context.lineTo(x, y)
    
    context.stroke();
}
