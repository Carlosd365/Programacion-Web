from django.contrib import admin
from .models import Maestro

@admin.register(Maestro)
class MaestroAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'especialidad', 'escuela')
    list_filter = ('escuela',)
