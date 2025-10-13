let Clickbutton= document.getElementById("buton");
let formulaire= document.getElementById("formulaire");
let Submitbutton= document.getElementById("submit");
let Inputnom= document.getElementById("nom")

Clickbutton.addEventListener("click",function(){
  console.log("le bouton a ete cliquee")
})

Inputnom.addEventListener("input",function(){
    console.log("votre texte est"+ Inputnom.value);
})

formulaire.addEventListener("submit",function(e){
    e.preventDefault()
    console.log("Formulaire soumis avec le nom :"+Inputnom.value)
})
