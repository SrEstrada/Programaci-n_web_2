fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Regiones excluidas
    const excluidas = ['Lima', 'Callao'];

    const tipos = ['confirmed', 'recover', 'death', 'hospital', 'hospitaluci', 'nohospital'];
    const nombres = {
      confirmed: 'Casos Confirmados',
      recover: 'Recuperados',
      death: 'Fallecidos',
      hospital: 'Hospitalizados',
      hospitaluci: 'UCI',
      nohospital: 'No Hospitalizados'
    };

    tipos.forEach(tipo => {
      const labels = [];
      const valores = [];

      data.forEach(region => {
        if (!excluidas.includes(region.region)) {
          labels.push(region.region);
          const total = region[tipo]?.reduce((sum, item) => sum + parseInt(item.value || 0), 0);
          valores.push(total);
        }
      });

      crearGrafico(tipo, labels, valores);
    });

    function crearGrafico(tipo, etiquetas, datos) {
      const ctx = document.getElementById(`${tipo}Chart`).getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: etiquetas,
          datasets: [{
            label: nombres[tipo],
            data: datos,
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Cantidad'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Regiones'
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: nombres[tipo]
            },
            legend: {
              display: false
            }
          }
        }
      });
    }
  })
  .catch(err => console.error("Error al cargar los datos:", err));
