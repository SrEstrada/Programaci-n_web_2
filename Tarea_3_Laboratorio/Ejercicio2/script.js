// Esta función se encarga de invertir el texto ingresado por el usuario
function invertirTexto() {
    const texto = document.getElementById("textoOriginal").value; // Obtenemos el valor del input
    const textoInvertido = texto.split("").reverse().join("");    // Dividimos, invertimos y unimos el texto
    document.getElementById("resultado").innerText = textoInvertido; // Mostramos el resultado
  }
  