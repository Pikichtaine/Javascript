// variable
// je ve le resultat "...12 points"
let a=10
let b=2
let c=a+b
console.log(c + " points")


// function
// je veux voir mon Nom et mon age
function youtube(name, age){
    return "Je M'appele " + name + " et mon age et " + age + "anee"
}
    console.log(youtube("Zakaria",21));

//logique simple
//detection des âges
let age=9
if (age>=18){
    console.log("your good man")
}
else if (age<18){
    console.log("your little")
}
else{
    console.log("IDK")
}

// switch
// detecte le jour de la semaine

let jour="dimanche"
switch(jour){
    case "Lundi":
    console.log("Debut de la semaine");
    break;
    case "vendredi":
    console.log("Presque Week_End")
    break;
    case "samedi", "dimanche":
    console.log("Week_End");
     break;
    default:
        console.log("Normal Day")
}

// boucle
// compteur du 0 jusqu'a 10
for (let i=0; i<11; i++){
    console.log("Number " + i)
}