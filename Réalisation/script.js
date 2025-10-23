

// (Search)
const buton=document.getElementById("delete");
const spawn=document.getElementById("button");
const container=document.getElementById("container");
const input=document.getElementById("input");
let listContent=document.querySelector("ul");
let contenedor=document.getElementById("contenedor2");
let divText=document.getElementById("emptyMsg");
// (/Search)


// (Refresh)
window.onload = function() {
    if(listContent.querySelector("li")){
        contenedor.querySelector("div").remove();
    }
}
// (/Refresh)



// (Load Lists)
let savedata=JSON.parse(localStorage.getItem("taxes")) || [];
savedata.forEach(texteSauvegarder => spawnList(texteSauvegarder)); 
// (/Load Lists)



// (div Opaccity)
function deleteEmptyMsg(){
    if(listContent.querySelector("li")){
        contenedor.querySelector("div").remove();
    }else{
      let div=document.createElement("div")
        div.id="emptyMsg"
        div.classList.add("empty");
        div.innerText="Il n'y a aucune tâche. Ajoutez-en une ci-dessus."
        contenedor.appendChild(div);
    }
}
// (/div Opaccity)



// (Spawn function)
function spawni(){
const texto=input.value;
if(texto===""){
console.log("activado");
}else{
    spawnList(texto);
    savedata.push(texto);
    localStorage.setItem("taxes", JSON.stringify(savedata));
    // (Reset input)
input.value=""
    // (/Reset input)

}
};
// (/Spawn function)



// (Spawn Savedata or input text)
function spawnList(texteSauvegarder){


// (checkbox)
const checkbox=document.createElement("input");
checkbox.type="checkbox";
// (/checkbox)


// (Texte Liste)
const textInput=document.createTextNode(texteSauvegarder)
// (/Texte Liste)



// (Liste)
const liste=document.createElement("li");
const label=document.createElement("label");
liste.classList.add("item");

// (Delete Button)
const deleting=document.createElement("button");
deleting.classList.add("small-btn");
deleting.innerHTML = '🗑';
deleting.addEventListener("click", function() {
    liste.remove();
    
    // (Filter)
    savedata = savedata.filter(t => t !== texteSauvegarder);
    localStorage.setItem("taxes", JSON.stringify(savedata));
    // (/Filter)

    deleteEmptyMsg()

  });
// (/Delete Button)

label.appendChild(checkbox)
label.appendChild(textInput);
liste.appendChild(label);
liste.appendChild(deleting);
// (/Liste)


// (Container)
container.appendChild(liste);
// (/Container)


}
// (/Spawn Savedata or input text)


// (Spawn Button)
spawn.addEventListener("click",function(){
    spawni();
    deleteEmptyMsg();
});
// (/Spawn Button)


// (Spawn with Enter)
input.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        spawni();
        deleteEmptyMsg();
    }
});
// (/Spawn with Enter)


