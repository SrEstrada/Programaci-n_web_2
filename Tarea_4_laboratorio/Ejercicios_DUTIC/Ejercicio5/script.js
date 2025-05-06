fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const regiones = [];
    const totales = [];

    data.forEach(region => {
      regiones.push(region.region);
      const totalConfirmados = region.confirmed.reduce((acc, item) => acc + parseInt(item.value), 0);
      totales.push(totalConfirmados);
    });

    const ctx = document.getElementById('graficoLineas').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: regiones,
        datasets: [{
          label: 'Total de casos confirmados',
          data: totales,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          tension: 0.3,
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Comparación total de casos confirmados por región'
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Regiones' }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Casos confirmados' }
          }
        }
      }
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
