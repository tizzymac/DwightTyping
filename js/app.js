
var i = 0;
var dwight = "DWIGHT ";
var fullText = "untitled folder";

var inputBox = document.getElementById('doc');
inputBox.innerHTML = fullText;
inputBox.onkeyup = function(){
    fullText = fullText + dwight.charAt(i);
    inputBox.innerHTML = fullText
    i = (i + 1) % dwight.length;
}

inputBox.contentEditable = true;
inputBox.focus();


