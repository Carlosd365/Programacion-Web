from django.db import models
from maestros.models import Maestro

class Curso(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    maestro = models.ForeignKey(Maestro, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.nombre
