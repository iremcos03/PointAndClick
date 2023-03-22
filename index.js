document.getElementById("Main").innerText = "Point And Click Adventure";

const offcetCharacter = 16;

const mainCharachter = document .getElementById("mainCharachter")
const GameWindow = document .getElementById("GameWindow")

GameWindow.onClick = function (e){
    var rect = GameWindow. getBoundingClientRect{};
    var x = e.Clientx - rest.left;
    var y = e.Clienty - rest.top
    mainCharachter.style.left = x + "px"';
    mainCharachter.style.top = y + "px";


}