window.onload = function() {
    fetch("data.json")
      .then(response => response.json())
      .then(data => {
        const lista = document.getElementById("listaRegiones");
        data.forEach(region => {
          const li = document.createElement("li");
          li.textContent = region.region;
          lista.appendChild(li);
        });
      })
      .catch(error => {
        console.error("Error cargando data.json:", error);
      });
  };
  