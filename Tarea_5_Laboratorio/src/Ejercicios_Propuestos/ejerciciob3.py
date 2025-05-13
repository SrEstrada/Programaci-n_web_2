from chessPictures import queen
from interpreter import draw

# Alternancia: reina blanca y reina negra
fila = queen.join(queen.negative())
fila_repetida = fila.horizontalRepeat(4)  # 2 reinas x 4 = 8 reinas

draw(fila_repetida)
