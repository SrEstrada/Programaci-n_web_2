from django.db import models

class Persona(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre")
    apellidos = models.CharField(max_length=100, verbose_name="Apellidos")
    edad = models.PositiveIntegerField(verbose_name="Edad")

    def __str__(self):
        return f"{self.nombre} {self.apellidos}"

    class Meta:
        verbose_name = "Persona"
        verbose_name_plural = "Personas"