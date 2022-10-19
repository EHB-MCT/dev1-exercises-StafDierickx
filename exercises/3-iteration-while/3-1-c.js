"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    const mid =  (350+50)/2
    console.log("mid: "+mid)
    while (i < 5) {
        let step

        // if (i != 0) {
        //     if (i%2 == 0) {
                
        //         step = mid+(20*(i-1));
        //         console.log(i+" is even, step="+step)
                
        //     } else {
                
        //         console.log(20*(i-1))
        //         step = mid-(20*(i-1))
        //         console.log(i+" is odd, step="+step)
        //     }
        // } else {
        //     step = mid
        // }

        step = mid - ((5/2)*30)
        console.log((5/2)*20)
        step += 15+30*i

        Utils.drawLine(50, step, 350, step);
        Utils.drawLine(step, 50, step, 350);
        i++
    }
}