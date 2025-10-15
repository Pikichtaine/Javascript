// 96% Humain, 4% AI
const selecteur=document.getElementById("selector")

const caisse=document.getElementById("casilla");
const caisse1=document.getElementById("casilla1");
const caisse2=document.getElementById("casilla2");
const caisse3=document.getElementById("casilla3");
const caisse4=document.getElementById("casilla4");


let b=0
caisse.addEventListener("change",function(){
   if(caisse.checked){
    b++ 
}else{
    b--
}
selecteur.innerText=b;
})











caisse1.addEventListener("change",function(){
    if(caisse1.checked){
     b++ 
 }else{
     b--
 }
 selecteur.innerText=b;
 })
 
 caisse2.addEventListener("change",function(){
    if(caisse2.checked){
     b++ 
 }else{
     b--
 }
 selecteur.innerText=b;
 })

 caisse3.addEventListener("change",function(){
    if(caisse3.checked){
     b++ 
 }else{
     b--
 }
 selecteur.innerText=b;
 })

 caisse4.addEventListener("change",function(){
    if(caisse4.checked){
     b++ 
 }else{
     b--
 }
 selecteur.innerText=b;
 })
