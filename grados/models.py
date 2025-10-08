from django.db import models
from cursos.models import Curso

class Grado(models.Model):
    nombre = models.CharField(max_length=50)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre
