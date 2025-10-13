let titre= document.getElementById("tytol")
let button= document.querySelector(".buton")
let image= document.querySelector("img")

button.addEventListener("click",function(){
    titre.innerText="Este, es un titulo rojo";
    titre.classList.toggle("hightlight");
    image.setAttribute("src","medias/Carré_rouge.svg.png")
    image.setAttribute("alt","carré")
});