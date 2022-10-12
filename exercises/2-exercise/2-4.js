"use strict";

//canvas settings
const canvas = document.getElementById("canvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

const context = canvas.getContext("2d"); //create 2d context

//variables
const ctxWidth = context.canvas.width;
const ctxHeight = context.canvas.height;

context.beginPath();
context.fillStyle = "#dfa142";
context.fillRect(0, 0, ctxWidth, ctxHeight*(1/4));
context.stroke();

context.beginPath();
context.fillStyle = "#eb7836";
context.fillRect(0, ctxHeight*(1/4), ctxWidth, ctxHeight*(1/4));
context.stroke();

context.beginPath();
context.fillStyle = "#982d15";
context.fillRect(0, (ctxHeight*(1/4))*2, ctxWidth, ctxHeight*(1/4));
context.stroke();

context.beginPath()
context.fillStyle = "#ffffce"
context.arc(ctxWidth-ctxWidth/2, ctxHeight-ctxHeight*(1/4), ctxHeight/3, 0, 2 * Math.PI, false);
context.fill()

context.beginPath();
context.fillStyle = "#061886";
context.fillRect(0, ctxHeight-ctxHeight*(1/4), ctxWidth, ctxHeight*(1/4));
context.stroke();
