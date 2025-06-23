from django.urls import path
from .views import (
    personasAnotherCreateView,
    personasListView,
    personaUpdateView,
    personaDeleteView
)

urlpatterns = [
    path('', personasListView, name='lista_personas'),
    path('agregar/', personasAnotherCreateView, name='agregar_persona'),
    path('<int:id>/editar/', personaUpdateView, name='editar_persona'),
    path('<int:id>/eliminar/', personaDeleteView, name='eliminar_persona'),
]