"""
URL configuration for listaContactos project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from personas.views import (  # ¡Importa todas las vistas aquí!
    inicio, 
    crear_persona, 
    editar_persona, 
    eliminar_persona
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', inicio, name='inicio'),  # Cambié 'listar_personas' por 'inicio' para coincidir con tu código
    path('personas/agregar/', crear_persona, name='crear-persona'),
    path('editar/<int:id>/', editar_persona, name='editar-persona'),
    path('eliminar/<int:id>/', eliminar_persona, name='eliminar-persona'),  # ¡Con / al final!

]