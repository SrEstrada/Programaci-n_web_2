from django.shortcuts import render, redirect
from .forms import PersonaForm
from django.db.models import Q
from .models import Persona
from .forms import PersonaForm
from django.shortcuts import get_object_or_404

def crear_persona(request):
    if request.method == 'POST':
        form = PersonaForm(request.POST)
        if form.is_valid():
            form.save()  # Guarda en la base de datos
            return redirect('inicio')  # Redirige al listado
    else:
        form = PersonaForm()  # Formulario vacío para GET
    return render(request, 'personas/crear_persona.html', {'form': form})

def inicio(request):
    query = request.GET.get('q', '')
    if query:
        personas = Persona.objects.filter(
            Q(dni__icontains=query) | 
            Q(nombres__icontains=query) |
            Q(apellidos__icontains=query)
        )
    else:
        personas = Persona.objects.all()
    
    context = {'personas': personas, 'titulo': 'Resultados' if query else 'Listado de Personas'}
    return render(request, 'personas/inicio.html', context)

def editar_persona(request, id):
    persona = get_object_or_404(Persona, id=id)
    if request.method == 'POST':
        form = PersonaForm(request.POST, instance=persona)
        if form.is_valid():
            form.save()
            return redirect('inicio')
    else:
        form = PersonaForm(instance=persona)
    return render(request, 'personas/crear_persona.html', {
        'form': form,
        'editar': True  # Para diferenciar entre crear/editar en el template
    })

def eliminar_persona(request, id):  
    persona = get_object_or_404(Persona, id=id)
    persona.delete()
    return redirect('inicio')