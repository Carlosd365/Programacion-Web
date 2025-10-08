from django.contrib import admin
from .models import Estudiante

@admin.register(Estudiante)
class EstudianteAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'edad', 'grado')
    list_filter = ('grado',)
    search_fields = ('nombre',)
