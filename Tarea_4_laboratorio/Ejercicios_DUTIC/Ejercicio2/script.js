fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const region = data[0]; // Amazonas
    const total = region.confirmed.reduce((acc, dia) => acc + parseInt(dia.value), 0);
    
    const divResultado = document.getElementById('resultado');
    divResultado.textContent = `Total de casos confirmados en ${region.region}: ${total}`;
  })
  .catch(error => console.error('Error cargando JSON:', error));
