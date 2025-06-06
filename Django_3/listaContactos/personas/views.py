from django.shortcuts import render
from .models import Persona

def listar_personas(request):
    personas = Persona.objects.all()  # Obtiene TODAS las personas de la BD
    context = {
        'personas': personas,
        'titulo': 'Listado Completo de Personas'
    }
    return render(request, 'personas/descripcion.html', context)