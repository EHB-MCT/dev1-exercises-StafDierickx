"use strict";

/**
 * @type {CanvasRenderingContext2D}
 */

let context;

//set context properties
getCanvasContext();


function getCanvasContext() {
    let canvas = document.querySelector('canvas');
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    context = canvas.getContext('2d');
}

export default context;