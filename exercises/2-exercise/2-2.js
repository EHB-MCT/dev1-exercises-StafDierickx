"use strict";

//canvas settings
const canvas = document.getElementById("canvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

const context = canvas.getContext("2d"); //create 2d context

drawnThing(10, 10, 500, 500)

function drawnThing(x, y, width, height) {
    for (let i = 1; i < 10; i++) {
        console.log("iteration "+ i);
    
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);

        const widthX = width-50*i 
        const widthy = height-50*i 

        const locX = (x+ width - widthX)/2
        const locY = (y+ height - widthy)/2
    
        context.beginPath();
        context.fillRect(locX, locY, widthX, widthy);
        context.fillStyle = 'rgb('+ r +','+ g + ','+ b +')';
        context.stroke();
    }

}
