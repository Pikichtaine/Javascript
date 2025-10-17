const buton=document.getElementById("delete");
const spawn=document.getElementById("button");
const container=document.getElementById("container");
const input=document.getElementById("input");


// (Spawn function)
function spawni(){
const texto=input.value;
if(texto===""){
console.log("activado");
}else{

    
// (checkbox)
const checkbox=document.createElement("input");
checkbox.classList.add("checkbox");
checkbox.type="checkbox";
// (/checkbox)


// (Texte Liste)
const textInput=document.createTextNode(texto)
// (/Texte Liste)



// (Liste)
const liste=document.createElement("li");
liste.classList.add("item");


// (Delete Button)
const deleting=document.createElement("button");
deleting.classList.add("small-btn");
deleting.innerHTML = '🗑';
deleting.addEventListener("click", function() {
    liste.remove();
  });
// (/Delete Button)


liste.appendChild(checkbox);
liste.appendChild(textInput);
liste.appendChild(deleting);
// (/Liste)


// (Container)
container.appendChild(liste);
// (/Container)


// (Reset input)
input.value=""
}
};
// (/Spawn function)


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



