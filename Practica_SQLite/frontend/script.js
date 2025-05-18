document.addEventListener('DOMContentLoaded', () => {
  fetch('http://127.0.0.1:5000/api/peliculas')
    .then(response => response.json())
    .then(data => {
      const cuerpoTabla = document.querySelector('#tabla-peliculas tbody');

      data.forEach(pelicula => {
        const fila = document.createElement('tr');

        pelicula.forEach(campo => {
          const celda = document.createElement('td');
          celda.textContent = campo;
          fila.appendChild(celda);
        });

        cuerpoTabla.appendChild(fila);
      });
    })
    .catch(error => {
      console.error('Error al cargar datos:', error);
    });
});
