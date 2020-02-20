


window.onload = function () {

    let SIZE_WAVE = 1000;

    let canvas = document.getElementById("app-background-wave");

    canvas.width = document.documentElement.clientWidth;
    canvas.height = SIZE_WAVE;

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



    let fillElem = document.getElementById('app-background-fill');

    function getSizeFill(){
        return document.getElementById('view-process').offsetHeight +
            document.getElementById('view-job').offsetHeight +
            document.getElementById('view-contacts').offsetHeight +
            document.getElementById('app-bottom').offsetHeight -
            25
            ;
    }

    let _mobileBack = document.getElementById('view-process').offsetHeight;

    fillElem.style.height = getSizeFill() - ((document.documentElement.clientWidth < 769)? (SIZE_WAVE -_mobileBack + 140): SIZE_WAVE) + 'px';

};

