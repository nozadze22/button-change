const main = document.querySelector("#main");
const catchme = document.querySelector("#reject");
const love = document.querySelector("#accept");
const front = document.querySelector("#front");
const back = document.querySelector("#back");
const afro = document.querySelector("#afro");

catchme.addEventListener("mouseover", ()=>{
mouseHover();

});
function mouseHover () {
    const i = Math.floor(Math.random()*500)+1;
    const j = Math.floor(Math.random()*300)+1;
    

catchme.style.left = i+ "px";
catchme.style.top = j+ "px";

}



love.addEventListener("click",() => {
front.style.display = "none";
back.style.display ="block";
afro.style.display = 'block';
catchme.style.display = "none"

});