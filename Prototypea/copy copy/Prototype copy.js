// quiero que se me vea cuantos "C" eleji en el prompt, c1 10, C2 7, C3 3, C4 5
let liste = ["C1","C2","C3","C1","C1","C1","C1","C1","C1","C1","C1","C1","C2","C2","C2","C2","C2","C2","C3","C3","C4","C4","C4","C4","C4"]
let C = prompt("Entrez votre valeur C ici:")
let limite = 0
let compteur = 0

for (liste[limite]; limite<liste.length;limite++){
    if (C==liste[limite]){
        compteur++
    }
}
if (compteur<=0){
    alert("votre valeur C n'est pas dans la liste")
}
else{
    alert("votre valeur "+C+ " est mentionne "+compteur+ " fois dans la liste ")
}