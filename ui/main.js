console.log('Loaded!');
var element = document.getElementById("main-text");
element.innerHTML = "Welcome to my App";
var img = document.getElementById("ian");
var marginLeft = 0;
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
};
    function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + "px";
}