"use strict";

//canvas settings
const canvas = document.getElementById("canvas")
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

const context = canvas.getContext("2d") //create 2d context

context.translate(50,50) // canvas offset

//drawn red rectangles
context.beginPath() //begin with drawing
context.rect(0, 0, 150, 150)
context.rect(150, 150, 150, 150)

//small red rectangles
context.rect(225, 20, 55, 55)
context.rect(20,225, 55, 55)
context.strokeStyle = "red"
context.stroke() // draw instructions

//draw black boxes
context.beginPath()
context.fillRect(75, 75, 150, 150) // big middle box
context.fillRect(280, 0, 20, 20)
context.fillRect(0, 280, 20, 20)
context.strokeStyle = "black"
context.stroke()