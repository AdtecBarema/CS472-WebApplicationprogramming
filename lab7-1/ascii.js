"use strict"

var i = 0;
var timerId = null;
var framesArray = [];
var framesAll = "";
var startbtn;
var animationdropdown;
var sizedropdown;
var stopbtn;
var speedcheckbox;
var animationSpeed = 0;
var tbxfontSizes = { 'tiny': "7pt", 'small': "10pt", 'medium': "12pt", 'large': "16pt", 'extralarge': "24pt", 'xxl': "32pt" }
function animate() {
    if (i === framesArray.length) {
        i = 0;
    }
    document.getElementById("textarea").value = framesArray[i];
    i = i + 1;
}

function startClicked() {
    startbtn.disabled = true;
    animationdropdown.disabled = true;
    stopbtn.disabled = false;
    framesAll = document.getElementById("textarea").value;
    framesArray = framesAll.split("=====\n");
    if (timerId === null) {
        timerId = setInterval(animate, animationSpeed);
    }
}

function stopClicked() {
    startbtn.disabled = false;
    stopbtn.disabled = true;
    animationdropdown.disabled = false;
    clearInterval(timerId);
    timerId = null;
    framesArray = [];
    i = 0;
    document.getElementById("textarea").value = framesAll;
    framesAll = "";
}

function speedcheckboxClicked() {
    if (speedcheckbox.checked === true) {
        animationSpeed = 50;
    } else {
        animationSpeed = 250;
    }
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    if (stopbtn.disabled !== true) {
        timerId = setInterval(animate, animationSpeed);
    }
}

function selectAnimation() {
    var selectedAnimation = document.getElementById("animationselection").value;
    document.getElementById("textarea").value = ANIMATIONS[selectedAnimation];
    i = 0;
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    framesArray = [];
    framesAll = "";

}

function changeSize() {
    document.getElementById("textarea").style.fontSize = tbxfontSizes[sizedropdown.value]
}

window.onload = function () {
    startbtn = document.getElementById("start");
    animationdropdown = document.getElementById("animationselection");
    sizedropdown = document.getElementById("sizeselection");
    speedcheckbox = document.getElementById("speed");
    speedcheckbox.checked = false;
    animationSpeed = 250;
    stopbtn = document.getElementById("stop");
    startbtn.onclick = startClicked;
    stopbtn.onclick = stopClicked;
    speedcheckbox.onclick = speedcheckboxClicked;
    animationdropdown.onchange = selectAnimation;
    sizedropdown.onchange = changeSize;
    sizedropdown.value = "medium"
    stopbtn.disabled = true;
};