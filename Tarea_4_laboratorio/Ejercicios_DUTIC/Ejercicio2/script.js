fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('lista-confirmados');
    const lista = document.createElement('ul');

    data.forEach(region => {
      const total = region.confirmed.reduce((sum, item) => sum + parseInt(item.value), 0);
      const item = document.createElement('li');
      item.textContent = `${region.region}: Casos confirmados = ${total}`;
      lista.appendChild(item);
    });

    contenedor.appendChild(lista);
  })
  .catch(error => console.error('Error al cargar los datos:', error));
