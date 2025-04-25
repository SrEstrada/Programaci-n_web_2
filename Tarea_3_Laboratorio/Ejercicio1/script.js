// Función que devuelve el nombre del día según el número recibido
function obtenerDiaTexto(diaNumero) {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return dias[diaNumero];
  }
  
  // Esta función obtiene el día actual y lo muestra en pantalla
  function mostrarDia() {
    const fechaActual = new Date(); // Creamos un objeto con la fecha actual
    const numeroDia = fechaActual.getDay(); // getDay() devuelve un número entre 0 (Domingo) y 6 (Sábado)
    const nombreDia = obtenerDiaTexto(numeroDia); // Obtenemos el nombre con la función
    document.getElementById("resultado").innerText = "Hoy es: " + nombreDia;
  }
  