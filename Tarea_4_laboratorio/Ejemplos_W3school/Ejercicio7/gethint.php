<?php
// Array con nombres
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Elena";

// Obtener el parámetro q de la URL
$q = $_REQUEST["q"];
$sugerencia = "";

// Buscar coincidencias
if ($q !== "") {
  $q = strtolower($q);
  $len = strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($sugerencia === "") {
        $sugerencia = $name;
      } else {
        $sugerencia .= ", $name";
      }
    }
  }
}

// Mostrar "no hay sugerencias" si no se encontró nada
echo $sugerencia === "" ? "no hay sugerencias" : $sugerencia;
?>
