const addBtn = document.getElementById('addBtn');
const newTaskInput = document.getElementById('newTask');
const contenu=document.getElementById('tasksList')
addBtn.addEventListener("click",function(){
    const inputText=newTaskInput.value.trim()
    if(inputText===""){
        return;
    }else{
        let b=0
        const completadas = document.getElementById("totalCount");
        const input=document.createElement("input")
        input.type = "checkbox"
        input.className = "casilla"
        input.addEventListener("change", detection);
        const liste=document.createElement("li")
        liste.appendChild(input);
        const texte=document.createTextNode(inputText)
        liste.appendChild(texte);
        contenu.appendChild(liste);
        newTaskInput.value=""
        b++
        completadas.textContent=b
    }
})
// 1️⃣ Seleccionamos todos los checkboxes


// 2️⃣ Seleccionamos el contador del sensor
const contador = document.getElementById("contador");



// 3️⃣ Función que cuenta cuántas etiquetas están encendidas (activadas)
function detection() {
    const etiquetas = document.querySelectorAll(".casilla");

  let a = 0; // empezamos en 0
  

  etiquetas.forEach(etiqueta => {
    if (etiqueta.checked) { // si está activada
      a++; // sumamos 1
    }
    if (etiqueta.checked || !etiqueta.checked){
        b++
    }
  });

  contador.textContent = a; // mostramos el número en pantalla
  
}



