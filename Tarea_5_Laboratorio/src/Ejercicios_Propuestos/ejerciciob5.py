from chessPictures import square
from interpreter import draw
from picture import Picture

# Fila 1: gris-blanco
fila1 = square.negative().join(square).horizontalRepeat(4)

# Fila 2: blanco-gris
fila2 = square.join(square.negative()).horizontalRepeat(4)

# Alternamos las filas verticalmente
tablero = fila1.up(fila2)

draw(tablero)
