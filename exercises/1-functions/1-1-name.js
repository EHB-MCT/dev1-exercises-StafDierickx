"use strict";

//canvas settings
const canvas = document.getElementById("canvas")
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

const context = canvas.getContext("2d") //create 2d context

context.beginPath() //begin with drawing
// draw letter s
context.moveTo(20,10) // move the pen to
context.lineTo(30, 20) // draw a line to
context.moveTo(20, 10) // move the pen to
context.lineTo(10, 20) // draw a line to
context.moveTo(10, 20)
context.lineTo(30, 40)
context.moveTo(30, 40)
context.lineTo(20, 50)
context.moveTo(20,50)
context.lineTo(10, 40)
context.strokeStyle = "red" // set stroke color
context.stroke() // draw above instructions

// draw letter t
context.beginPath()
context.moveTo(40, 10) 
context.lineTo(60, 10) 
context.moveTo(50, 10) 
context.lineTo(50, 50) 
context.strokeStyle = "oragne"
context.stroke()

// draw letter a
context.beginPath()
context.moveTo(70, 50)
context.lineTo(80, 10)
context.lineTo(90, 50) // move line to nex coordinates without moving pencil
context.strokeStyle = "green"
context.stroke();

// draw letter f
context.beginPath()
context.moveTo(120, 10)
context.lineTo(100, 10)
context.lineTo(100, 50)
context.moveTo(100, 30)
context.lineTo(110, 30)
context.strokeStyle = "purple"
context.stroke()