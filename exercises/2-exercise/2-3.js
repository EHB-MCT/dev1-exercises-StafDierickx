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
context.fillStyle = "rgb(48 ,61 ,78)";
context.fillRect(0, 0, ctxWidth, ctxHeight*(2/3));
context.stroke();

context.beginPath();
context.fillStyle = "rgb(82, 150, 273"
context.fillRect(0, ctxHeight*(2/3), ctxWidth, ctxHeight*(1/3));
context.stroke();

context.beginPath();
context.fillStyle = "white" //"rgb(48 ,61 ,78)";
context.fillRect((ctxWidth-(ctxWidth*(1/3)))/2, 0, ctxWidth*(1/3), ctxHeight);
context.stroke();

context.beginPath()
context.fillStyle = "red" //"rgb(255, 1, 245)"
context.fillRect(0, ctxWidth*(1/6), ctxWidth, ctxHeight*(1/3))
context.stroke()