document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Calculamos la suma total de casos confirmados por región
        const regionesConTotales = data.map(region => {
          const totalCasos = region.confirmed.reduce((suma, dia) => suma + parseInt(dia.value), 0);
          return {
            nombre: region.region,
            total: totalCasos
          };
        });
  
        // Ordenamos de mayor a menor
        regionesConTotales.sort((a, b) => b.total - a.total);
        // Tomamos las 10 primeras
        const top10 = regionesConTotales.slice(0, 10);
        // Mostramos en la lista
        const lista = document.getElementById('lista-top10');
        top10.forEach((region, index) => {
          const item = document.createElement('li');
          item.textContent = `${region.nombre}: ${region.total} casos confirmados`;
          lista.appendChild(item);
        });
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  });
  