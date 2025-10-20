// (Search)
const buton=document.getElementById("delete");
const spawn=document.getElementById("button");
const container=document.getElementById("container");
const input=document.getElementById("input");
// (/Search)


// (Load Lists)
let savedata=JSON.parse(localStorage.getItem("taxes")) || [];
savedata.forEach(texte => spawnList(texte));
// (/Load Lists)


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
}
};
// (/Spawn function)


// (Spawn Savedata or input text)
function spawnList(texte){
// (checkbox)
const checkbox=document.createElement("input");
checkbox.classList.add("checkbox");
checkbox.type="checkbox";
// (/checkbox)


// (Texte Liste)
const textInput=document.createTextNode(texte)
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
    savedata = savedata.filter(t => t !== texte);
    localStorage.setItem("taxes", JSON.stringify(savedata));
    // (/Filter)

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
// (Spawn Savedata or input text)


// (Spawn Button)
spawn.addEventListener("click",spawni);
// (/Spawn Button)


// (Spawn with Enter)
input.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        spawni();
    }
});
// (/Spawn with Enter)



