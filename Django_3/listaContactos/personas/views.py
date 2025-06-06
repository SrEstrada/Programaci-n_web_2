from django.shortcuts import render, redirect
from .forms import PersonaForm

def crear_persona(request):
    if request.method == 'POST':
        form = PersonaForm(request.POST)
        if form.is_valid():
            form.save()  # Guarda en la base de datos
            return redirect('listar-personas')  # Redirige al listado
    else:
        form = PersonaForm()  # Formulario vacío para GET

    return render(request, 'personas/crear_persona.html', {'form': form})