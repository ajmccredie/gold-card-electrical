let lineContainer = document.getElementsByClassName("line-container");
console.log(lineContainer.length);
let menuBox = document.getElementsByClassName("menu-box");
console.log(menuBox.length);

lineContainer.addEventListener("click", changeState());
function changeState() {
    lineContainer.classList.toggle("pressed");
    menuBox.classList.toggle("pressed");
};