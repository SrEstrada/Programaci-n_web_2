// Esperamos que todo cargue
document.addEventListener('DOMContentLoaded', function() {
  const tipoOperacion = document.getElementById('tipoOperacion');
  const operacion = document.getElementById('operacion');
  const valor1 = document.getElementById('valor1');
  const valor2 = document.getElementById('valor2');
  const calcularBtn = document.getElementById('calcularBtn');
  const resultado = document.getElementById('resultado');

  // Cambiar operadores según el tipo seleccionado
  tipoOperacion.addEventListener('change', actualizarOperaciones);
  calcularBtn.addEventListener('click', realizarOperacion);

  function actualizarOperaciones() {
      operacion.innerHTML = ''; // Limpiamos primero
      if (tipoOperacion.value === 'aritmetica') {
          agregarOpcion('+', '+');
          agregarOpcion('-', '-');
          agregarOpcion('*', '*');
          agregarOpcion('/', '/');
          valor1.placeholder = "Número 1";
          valor2.placeholder = "Número 2";
      } else if (tipoOperacion.value === 'logica') {
          agregarOpcion('AND', 'AND');
          agregarOpcion('OR', 'OR');
          agregarOpcion('NOT', 'NOT');
          valor1.placeholder = "V o F";
          valor2.placeholder = "V o F (o vacío para NOT)";
      } else if (tipoOperacion.value === 'bits') {
          agregarOpcion('AND', 'AND');
          agregarOpcion('OR', 'OR');
          agregarOpcion('XOR', 'XOR');
          valor1.placeholder = "0 o 1";
          valor2.placeholder = "0 o 1";
      }
  }

  function agregarOpcion(valor, texto) {
      const option = document.createElement('option');
      option.value = valor;
      option.textContent = texto;
      operacion.appendChild(option);
  }

  function realizarOperacion() {
      const tipo = tipoOperacion.value;
      const op = operacion.value;
      let v1 = valor1.value.trim().toUpperCase();
      let v2 = valor2.value.trim().toUpperCase();

      if (tipo === 'aritmetica') {
          const num1 = parseFloat(v1);
          const num2 = parseFloat(v2);

          if (isNaN(num1) || isNaN(num2)) {
              resultado.textContent = "Por favor ingresa números válidos.";
              return;
          }

          let res = 0;
          if (op === '+') res = num1 + num2;
          else if (op === '-') res = num1 - num2;
          else if (op === '*') res = num1 * num2;
          else if (op === '/') res = num2 !== 0 ? num1 / num2 : "División por cero no permitida";

          resultado.textContent = "Resultado: " + res;
      }
      else if (tipo === 'logica') {
          if (!['V', 'F'].includes(v1) || (op !== 'NOT' && !['V', 'F'].includes(v2))) {
              resultado.textContent = "Solo se permiten valores V o F.";
              return;
          }

          let bool1 = v1 === 'V';
          let bool2 = v2 === 'V';
          let res = '';

          if (op === 'AND') res = (bool1 && bool2) ? 'V' : 'F';
          else if (op === 'OR') res = (bool1 || bool2) ? 'V' : 'F';
          else if (op === 'NOT') res = (!bool1) ? 'V' : 'F';

          resultado.textContent = "Resultado: " + res;
      }
      else if (tipo === 'bits') {
          if (!['0', '1'].includes(v1) || !['0', '1'].includes(v2)) {
              resultado.textContent = "Solo se permiten valores 0 o 1 para operaciones de bits.";
              return;
          }

          let num1 = parseInt(v1);
          let num2 = parseInt(v2);
          let res = 0;

          if (op === 'AND') res = num1 & num2;
          else if (op === 'OR') res = num1 | num2;
          else if (op === 'XOR') res = num1 ^ num2;

          resultado.textContent = "Resultado: " + res;
      }
  }

  // Cargar los operadores al inicio para que no aparezca vacío
  actualizarOperaciones();
});
