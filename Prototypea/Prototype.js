// quiero que se me vea cuantos "C" eleji en el prompt, c1 10, C2 7, C3 3, C4 5
let limite = 0
let b = 0
const checkboxes=document.querySelectorAll(".casilla")
const caisse=Array.from(checkboxes)
caisse=addEventListener("change",function(){
for (caisse[limite]; limite<caisse.length;limite++){
    if (caisse[limite].checked){
        b++
        console.log("checked!");

    }else{
        b--
        console.log("unchecked")
    }
}
})
selecteur.innerText=b;


