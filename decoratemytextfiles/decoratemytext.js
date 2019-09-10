"use strict";
///////////////

console.log("Hello!")
//////////////
//
// var timer=null;
// var isStoped = true;
//
// function biggerText() {
//
//     if(isStoped){
//         isStoped = false;
//     }
//
//     var textElement = document.getElementById('my-text-area');
//     var style = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
//     var fontSize = parseInt(style);
//
//     console.log(fontSize);
//     // now you have a proper float for the font size (yes, it can be a float, not just an integer)
//     textElement.style.fontSize = (fontSize + 2) + 'pt';
//
//
// }
//
// function makeBold() {
//     var myTextArea = document.getElementById("my-text-area");
//     var stateOfChecked = document.getElementById("bling");
//
//
//     if (stateOfChecked.checked == true) {
//         myTextArea.style.fontWeight = "bold";
//         myTextArea.style.color = "green";
//         document.body.style.backgroundImage = "url('Text Decorator_files/hundred-dollar-bill.jpg')";
//         myTextArea.style.textDecoration = "underline";
//     } if (stateOfChecked.checked == false) {
//         myTextArea.style.fontWeight = "normal";
//         document.body.style.backgroundImage = 'none';
//
//     }
// }
//
// function countdown() {
//     if (timer === null) {
//         timer = setInterval(biggerText, 500);
//     }
//
//     if(!isStoped){
//         clearTimer(timer);
//     }
// }
//
// function clearTimer(){
//     clearInterval(timer);
// }
//
// function igpaAtinlay(){
//     var myText = document.getElementById("my-text-area").value;
//     let temp = myText;
//
//     if("aeiou".indexOf(temp) !=0){
//         myText = myText.substring(1, temp.length-1) + temp[0]+"pay";
//     }
//     if("aeiou".indexOf(temp) ==0){
//         myText = myText+"yay";
//     }
//     document.getElementById("my-text-area").value = myText;
// }
//
// window.onload = function() {
//     document.getElementById('bigger').onclick = countdown;
// }
//
//
