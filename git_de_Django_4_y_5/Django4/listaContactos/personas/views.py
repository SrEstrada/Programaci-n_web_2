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
def personasListView(request):
    queryset = Persona.objects.all()
    context = {'object_list': queryset}
    return render(request, 'personas/personasLista.html', context)