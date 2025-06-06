from django.db import models

class Persona(models.Model):
    dni = models.CharField(max_length=8, unique=True)  # Campo nuevo
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    edad = models.IntegerField(blank=True, null=True)
    donador = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.dni} - {self.nombres} {self.apellidos}"