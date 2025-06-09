from django.shortcuts import render
from django.core.mail import send_mail
def index (request):
    send_mail(
        'Hola desde Django',
        'Este es un mensaje de prueba enviado desde Django.',
        'sergiolibra12@gmail.com',  # Remitente
        ['pekimeh319@3dboxer.com'],  # Destinatario(s)
        fail_silently=False,  # Si es True, no se lanzará una excepción si falla el envío
    )
    return render(request, 'send/index.html')
