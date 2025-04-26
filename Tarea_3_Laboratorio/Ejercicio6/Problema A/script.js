// Inicializamos estados de tamaño y color
let grande = false;
let rojo = false;

// Esta función cambia el tamaño del texto al hacer clic
function cambiarTamaño() {
  const texto = document.getElementById("miTexto");

  if (grande) {
    texto.style.fontSize = "32px"; // tamaño normal
  } else {
    texto.style.fontSize = "60px"; // tamaño grande
  }

  grande = !grande; // Cambiamos el estado
}

// Esta función cambia el color del texto al hacer clic
function cambiarColor() {
  const texto = document.getElementById("miTexto");

  if (rojo) {
    texto.style.color = "#2c3e50"; // color por defecto
  } else {
    texto.style.color = "red"; // color alternativo
  }

  rojo = !rojo; // Cambiamos el estado
}
