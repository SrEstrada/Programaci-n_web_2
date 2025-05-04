function obtenerPoema() {
    fetch('/recitar')
      .then(response => response.json())
      .then(data => {
        document.getElementById('resultado').innerHTML = data.text;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  