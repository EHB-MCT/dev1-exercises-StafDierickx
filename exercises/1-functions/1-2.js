"use strict";

//canvas settings
const canvas = document.getElementById("canvas")
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

const context = canvas.getContext("2d") //create 2d context

//drawn rectangle
context.beginPath() //begin with drawing
context.rect(20, 20, 150, 150)
context.stroke() // draw instructions

//draw strokes
context.beginPath()
context.moveTo(20, 20)
context.lineTo(170, 170)
context.moveTo(170, 20)
context.lineTo(20, 170)
context.strokeStyle = "red" //set collor of stroke
context.stroke()