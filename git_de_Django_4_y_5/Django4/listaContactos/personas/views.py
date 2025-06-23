from django.shortcuts import render
from .forms import RawPersonaForm
from .models import Persona

def personasAnotherCreateView(request):
    if request.method == "POST":
        form = RawPersonaForm(request.POST)
        if form.is_valid():
            Persona.objects.create(**form.cleaned_data)  # Guarda en DB
    else:
        form = RawPersonaForm()  # Formulario vacío para GET
    return render(request, 'personas/personasCreate.html', {'form': form})