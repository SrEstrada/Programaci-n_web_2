// Esta función calcula cuántos días faltan para el 15 de agosto
function calcularDias() {
    const hoy = new Date(); // Fecha actual
    const anioActual = hoy.getFullYear(); // Año actual
  
    // Creamos una fecha del 15 de agosto de este año
    let diaArequipa = new Date(anioActual, 8, 15); // Mes 7 es agosto porque enero es 0
  
    // Si ya pasó el 15 de agosto este año, se calcula para el próximo
    if (hoy > diaArequipa) {
      diaArequipa = new Date(anioActual + 1, 8, 15);
    }
  
    // Calculamos la diferencia en milisegundos y lo convertimos a días
    const diferencia = diaArequipa - hoy;
    const diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  
    // Mostramos el resultado
    document.getElementById("resultado").innerText = `Faltan ${diasRestantes} día(s) para el Día de Arequipa 🎉`;
}
  