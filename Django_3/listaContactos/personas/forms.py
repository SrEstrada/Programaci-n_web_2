from django import forms
from .models import Persona

class PersonaForm(forms.ModelForm):
    class Meta:
        model = Persona
        fields = ['nombres', 'apellidos', 'edad', 'donador']
        widgets = {
            'nombres': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Ej: Juan'}),
            'apellidos': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Ej: Pérez'}),
            'edad': forms.NumberInput(attrs={'class': 'form-control'}),
            'donador': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }
        labels = {
            'donador': '¿Es donador de órganos?',
        }