from django.shortcuts import render

def test_template_view(request):
    context = {
        'myText': '¡Funciona!',
        'myNumber': 100,
        'myList': [10, 20, 30],
    }
    return render(request, 'personas/descripcion.html', context)