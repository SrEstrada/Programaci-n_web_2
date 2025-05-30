from django.contrib import admin
from .models import Persona

@admin.register(Persona)
class PersonaAdmin(admin.ModelAdmin):
    list_display = ("nombre", "apellidos", "edad")
    search_fields = ("nombre", "apellidos")