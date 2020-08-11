
var i = 0;
var dwight = "DWIGHT "


var inputBox = document.getElementById('doc');
inputBox.onkeyup = function(){
	var currentText = document.getElementById('doc').innerHTML;
    // document.getElementById('doc').innerHTML = (currentText + nextLetter()).substr(1);
    document.getElementById('doc').innerHTML = (currentText + dwight.charAt(i)).substr(1);
    i = (i + 1) % dwight.length;
}
inputBox.contentEditable = true;
inputBox.focus();


