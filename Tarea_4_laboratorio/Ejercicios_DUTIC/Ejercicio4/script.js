fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const arequipa = data.find(region => region.region === "Arequipa");

    if (arequipa) {
      const fechas = arequipa.confirmed.map(item => item.date);
      const valores = arequipa.confirmed.map(item => parseInt(item.value));

      const ctx = document.getElementById('graficoArequipa').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: fechas,
          datasets: [{
            label: 'Casos confirmados',
            data: valores,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              title: { display: true, text: 'Fecha' }
            },
            y: {
              beginAtZero: true,
              title: { display: true, text: 'Casos' }
            }
          }
        }
      });
    } else {
      console.error("No se encontró la región Arequipa.");
    }
  });
