const input=document.getElementById("input")
const bouton=document.getElementById("boton")
const contenu=document.getElementById("contenido")
const compteur=document.getElementById("contador")
const selecteur=document.getElementById("selector")
let a=0

bouton.addEventListener("click", function(){
    const texte=input.value.trim()
    if(texte===""){
        return;
    }
        const ligne=document.createElement("input")
        ligne.type = "checkbox"
        ligne.className = ".casilla"
        const span=document.createElement("span")
        span.innerText=texte
        const br=document.createElement("br")
        contenu.appendChild(ligne);
        contenu.appendChild(span);
        contenu.appendChild(br);

    input.value=""

        a++;
        compteur.innerText=a;
})

const caisse=document.querySelectorAll(".casilla");
let b=0
caisse=addEventListener("change",function(event){
   if(caisse.checked){
    b++
    
}
selecteur.innerText=b;
})


