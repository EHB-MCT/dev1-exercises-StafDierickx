"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

console.log("7-1.js")

const width = context.canvas.width
const height = context.canvas.height
console.log("width "+ width)
console.log("height "+ height)

let list = []
let average

setup('1000')
average = 
console.log(Utils.CalcAverage(list))

function setup(amount) {
    for (let i = 0; i<amount; i++) {
        list.push(Utils.randomIntBetween(0,100))
    }
    // list.forEach(ele => {
    //     console.log(ele)
    // });
}

