document.getElementById("MainTitle").innerText = "Point And Click Adventure";

const offcetCharacter = 16;

const mainCharacter = document .getElementById("mainCharacter")
const GameWindow = document .getElementById("GameWindow")

GameWindow.onclick = function (e){
    var rect = GameWindow. getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top
    mainCharacter.style.left = x - offcetCharacter+ "px";
    mainCharacter.style.top = y  - offcetCharacter +"px";

}