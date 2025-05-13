from chessPictures import square
from interpreter import draw
from picture import Picture

# Creamos una fila con casillas alternadas empezando en blanco
fila = square.join(square.negative()).horizontalRepeat(4)

draw(fila)
