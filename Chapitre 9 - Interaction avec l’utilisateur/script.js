let titre= document.getElementById("tytol");
let button= document.getElementById("buton");

button.addEventListener("click",function(){
    let nom=prompt("saisiser votre nom")
    if(nom){
        titre.innerText="Bonjour "+ nom
    }
    else{
        alert("vous n'avez rien inséré")
    }
})