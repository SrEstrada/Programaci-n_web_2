from chessPictures import knight
from interpreter import draw

# Crear las dos filas
fila1 = knight.negative().join(knight).join(knight.negative()).join(knight)
fila2 = knight.join(knight.negative()).join(knight).join(knight.negative())

# Unir ambas filas
imagen = fila1.up(fila2)

# Espejo vertical (boca abajo, pero sin girarlos de lado)
imagen = imagen.verticalMirror()

draw(imagen)
