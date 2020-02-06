

let containerViewProcess = document.getElementById('view-process');

window.onload = function () {
    let canvas = document.getElementById("section-3");

    canvas.width = containerViewProcess.offsetWidth;
    canvas.height = 1000;

    let ctx = canvas.getContext("2d");
    let widUnit = canvas.width / 300;
    let heiUnit = canvas.height / 150;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(widUnit * 150, heiUnit * 30, 0, heiUnit * 145, canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.lineTo(0, 0);
    ctx.strokeStyle = "#FF9900";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "#FF9900";
    ctx.fill();
}