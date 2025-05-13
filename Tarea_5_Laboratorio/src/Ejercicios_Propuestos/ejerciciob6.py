from chessPictures import square
from interpreter import draw

# Se construye una fila del tablero de ajedrez comenzando con un cuadro blanco
fila_blanca = square.join(square.negative()).horizontalRepeat(4)

# Se construye una fila del tablero comenzando con un cuadro negro
fila_negra = square.negative().join(square).horizontalRepeat(4)

# Ahora intercalamos las filas, repitiendo cada una 4 veces
tablero_vacio = fila_blanca.up(fila_negra).verticalRepeat(4)

# Dibujamos
draw(tablero_vacio)
