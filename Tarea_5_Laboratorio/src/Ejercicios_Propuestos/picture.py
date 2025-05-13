from colors import *
class Picture:
  def __init__(self, img):
    self.img = img;

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    """ Devuelve el espejo vertical de la imagen """
    vertical = []
    for value in self.img:
    	vertical.append(value[::-1])
    return vertical

  def horizontalMirror(self):
    """ Devuelve el espejo horizontal de la imagen """
    horizontal = self.img[::-1]
    return Picture(horizontal)

  def negative(self):
    """ Devuelve un negativo de la imagen """
    nueva_img = []
    for fila in self.img:
        nueva_fila = ''.join(self._invColor(c) for c in fila)
        nueva_img.append(nueva_fila)
    return Picture(nueva_img)

  def join(self, p):
    """ Devuelve una nueva figura poniendo la figura del argumento 
        al lado derecho de la figura actual """
    nueva_img = [fila1 + fila2 for fila1, fila2 in zip(self.img, p.img)]
    return Picture(nueva_img)

  def up(self, p):
    """ Devuelve una nueva figura poniendo la figura del argumento
        encima de la figura actual """
    nueva_img = p.img + self.img
    return Picture(nueva_img)

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre la figura actual """
    nueva_img = []
    for fila_p, fila_self in zip(p.img, self.img):
        nueva_fila = ""
        for c_p, c_self in zip(fila_p, fila_self):
            nueva_fila += c_p if c_p != ' ' else c_self
        nueva_img.append(nueva_fila)
    return Picture(nueva_img)

  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    nueva_img = []
    for fila in self.img:
        nueva_img.append(fila * n)
    return Picture(nueva_img)


  def verticalRepeat(self, n):
    return Picture(None)

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)