from django.db import models
from grados.models import Grado

class Estudiante(models.Model):
    nombre = models.CharField(max_length=100)
    edad = models.PositiveIntegerField()
    grado = models.ForeignKey(Grado, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre
