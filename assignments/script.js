let interval;

function resetLayers() {

    document.getElementById("red").style.zIndex = "0";
    document.getElementById("blue").style.zIndex = "0";
    document.getElementById("green").style.zIndex = "0";

}

function showRed() {

    resetLayers();
    document.getElementById("red").style.zIndex = "3";

}

function showBlue() {

    resetLayers();
    document.getElementById("blue").style.zIndex = "3";

}

function showGreen() {

    resetLayers();
    document.getElementById("green").style.zIndex = "3";

}

function autoSwitch() {

    clearInterval(interval);

    let layers = ["red", "blue", "green"];
    let i = 0;

    interval = setInterval(function () {

        resetLayers();

        document.getElementById(layers[i]).style.zIndex = "3";

        i++;

        while (i >= layers.length) {

            i = 0;

        }

    }, 1000);

}
