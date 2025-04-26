// Esta función toma la URL, extrae el código y lo muestra sin guiones
function extraerCodigo() {
    const url = document.getElementById("urlMeet").value;
  
    // Buscamos el código después del último slash
    const partes = url.split("/");
    const ultimaParte = partes[partes.length - 1];
  
    // Quitamos los guiones con replace
    const codigoSinGuiones = ultimaParte.replace(/-/g, "");
  
    // Mostramos el resultado
    document.getElementById("resultado").innerText = `Código sin guiones: ${codigoSinGuiones}`;
  }
  