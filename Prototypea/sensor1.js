// 1️⃣ Seleccionamos todos los checkboxes
const etiquetas = document.querySelectorAll(".etiqueta");

// 2️⃣ Seleccionamos el contador del sensor
const contador = document.getElementById("contador");

// 3️⃣ Función que cuenta cuántas etiquetas están encendidas (activadas)
function detection() {
  let total = 0; // empezamos en 0

  etiquetas.forEach(etiqueta => {
    if (etiqueta.checked) { // si está activada
      total++; // sumamos 1
    }
  });

  contador.textContent = total; // mostramos el número en pantalla
}

// 4️⃣ Cuando cualquier checkbox cambie, actualizamos el sensor
etiquetas.forEach(etiqueta => {
  etiqueta.addEventListener("change", detection);
});
detection();