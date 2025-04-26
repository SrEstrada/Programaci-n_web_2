// Diccionario de operadores según tipo
const operadores = {
    aritmetica: ['+', '-', '*', '/', '%'],
    logica: ['&&', '||'],
    bitwise: ['&', '|', '^', '<<', '>>']
  };
  
  // Al cargar, actualizamos los operadores iniciales
  window.onload = actualizarOperadores;
  
  // Cambia el contenido del segundo select según el tipo elegido
  function actualizarOperadores() {
    const tipo = document.getElementById("tipoOperacion").value;
    const operadorSelect = document.getElementById("operador");
  
    operadorSelect.innerHTML = "";
  
    operadores[tipo].forEach(op => {
      const option = document.createElement("option");
      option.value = op;
      option.text = op;
      operadorSelect.appendChild(option);
    });
  }
  
  // Calcula el resultado según los valores y operador elegido
  function calcular() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const tipo = document.getElementById("tipoOperacion").value;
    const operador = document.getElementById("operador").value;
    let resultado;
  
    // Validación simple
    if (isNaN(a) || isNaN(b)) {
      document.getElementById("resultado").innerText = "Ingrese valores válidos";
      return;
    }
  
    // Switch por tipo de operación
    switch (tipo) {
      case "aritmetica":
        resultado = eval(`${a} ${operador} ${b}`);
        break;
      case "logica":
        resultado = (operador === "&&") ? (a && b) : (a || b);
        break;
      case "bitwise":
        switch (operador) {
          case "&": resultado = a & b; break;
          case "|": resultado = a | b; break;
          case "^": resultado = a ^ b; break;
          case "<<": resultado = a << b; break;
          case ">>": resultado = a >> b; break;
        }
        break;
    }
  
    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
  }
  