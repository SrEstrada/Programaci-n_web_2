// Escuchamos el envío del formulario
document.getElementById("formTabla").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitamos que se recargue la página
  
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const container = document.getElementById("tablaContainer");
    container.innerHTML = ""; // Limpiamos antes de generar
  
    const tabla = document.createElement("table");
    const fila = document.createElement("tr");
  
    // Generamos celdas con números aleatorios
    for (let i = 0; i < cantidad; i++) {
      const celda = document.createElement("td");
  
      const numero = Math.floor(Math.random() * 100) + 1;
      celda.innerText = numero;
      celda.classList.add("valorCelda");
  
      fila.appendChild(celda);
    }
  
    tabla.appendChild(fila);
    container.appendChild(tabla);
  
    // Mostrar el botón de suma
    document.getElementById("btnSumar").style.display = "inline-block";
    document.getElementById("resultado").innerText = "";
  });
  
  // Calculamos la suma al hacer clic
  document.getElementById("btnSumar").addEventListener("click", function () {
    const celdas = document.querySelectorAll(".valorCelda");
  
    let suma = 0;
    celdas.forEach(celda => {
      suma += parseInt(celda.innerText);
    });
  
    document.getElementById("resultado").innerText = `La suma total es: ${suma}`;
  });
  