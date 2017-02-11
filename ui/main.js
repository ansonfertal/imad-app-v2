console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "Welcome to my App";
var img = document.getElementById("ian");
img.onclick = function() {
    img.style.marginLeft = "100px";
};