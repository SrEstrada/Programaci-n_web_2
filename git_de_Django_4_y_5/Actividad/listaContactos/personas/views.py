from django.shortcuts import render
from .forms import RawPersonaForm
from .models import Persona
from django.shortcuts import render, redirect, get_object_or_404

from django.shortcuts import redirect  

def personasAnotherCreateView(request):
    if request.method == "POST":
        form = RawPersonaForm(request.POST)
        if form.is_valid():
            Persona.objects.create(**form.cleaned_data)
            return redirect('lista_personas')  # Redirige a la lista
    else:
        form = RawPersonaForm()
    return render(request, 'personas/personasCreate.html', {'form': form})
def personasListView(request):
    queryset = Persona.objects.all()
    context = {'object_list': queryset}
    return render(request, 'personas/personasLista.html', context)
def personaUpdateView(request, id):
    persona = get_object_or_404(Persona, id=id)
    if request.method == 'POST':
        form = RawPersonaForm(request.POST)
        if form.is_valid():
            # Actualizamos los datos de la persona
            persona.nombres = form.cleaned_data['nombres']
            persona.apellidos = form.cleaned_data['apellidos']
            persona.edad = form.cleaned_data['edad']
            persona.donador = form.cleaned_data['donador']
            persona.save()
            return redirect('lista_personas')
    else:
        # Prellenamos el formulario con los datos actuales
        form = RawPersonaForm(initial={
            'nombres': persona.nombres,
            'apellidos': persona.apellidos,
            'edad': persona.edad,
            'donador': persona.donador,
        })
    return render(request, 'personas/personasCreate.html', {'form': form})
def personaDeleteView(request, id):
    persona = get_object_or_404(Persona, id=id)
    if request.method == 'POST':
        persona.delete()
        return redirect('lista_personas')
    return render(request, 'personas/personasBorrar.html', {'persona': persona})