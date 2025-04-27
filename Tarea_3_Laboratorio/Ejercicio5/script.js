// Capturamos el formulario
const form = document.getElementById("formTabla");
const tablaContainer = document.getElementById("tablaContainer");
const btnSumar = document.getElementById("btnSumar");
const resultado = document.getElementById("resultado");

// Cuando envíen el formulario
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se recargue la página

  // Leer cantidad de filas y columnas
  const filas = parseInt(document.getElementById("filas").value);
  const columnas = parseInt(document.getElementById("columnas").value);

  // Validación rápida
  if (filas <= 0 || columnas <= 0) {
    alert("Debe ingresar números positivos.");
    return;
  }

  // Crear tabla
  let tablaHTML = "<table>";

  for (let i = 0; i < filas; i++) {
    tablaHTML += "<tr>";
    for (let j = 0; j < columnas; j++) {
      const random = Math.floor(Math.random() * 100) + 1; // Número aleatorio 1-100
      tablaHTML += `<td>${random}</td>`;
    }
    tablaHTML += "</tr>";
  }

  tablaHTML += "</table>";

  tablaContainer.innerHTML = tablaHTML;
  btnSumar.style.display = "inline-block"; // Mostrar botón de sumar
  resultado.innerText = ""; // Limpiar resultado anterior
});

// Cuando presionen el botón de Sumar
btnSumar.addEventListener("click", function() {
  let suma = 0;
  const celdas = document.querySelectorAll("#tablaContainer td");

  celdas.forEach(celda => {
    suma += parseInt(celda.innerText);
  });

  resultado.innerText = `La suma total es: ${suma}`;
});
