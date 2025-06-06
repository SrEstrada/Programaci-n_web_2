from django import forms
from .models import Persona

class PersonaForm(forms.ModelForm):
    class Meta:
        model = Persona
        fields = ['dni', 'nombres', 'apellidos', 'edad', 'donador']  
        widgets = {
            'dni': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Ej: 87654321',
                'pattern': '[0-9]{8}',  # Validación básica de 8 dígitos
                'title': 'El DNI debe tener 8 dígitos numéricos'
            }),
            'nombres': forms.TextInput(attrs={
                'class': 'form-control', 
                'placeholder': 'Ej: Juan'
            }),
            'apellidos': forms.TextInput(attrs={
                'class': 'form-control', 
                'placeholder': 'Ej: Pérez'
            }),
            'edad': forms.NumberInput(attrs={
                'class': 'form-control',
                'min': '0',
                'max': '120'
            }),
            'donador': forms.CheckboxInput(attrs={
                'class': 'form-check-input'
            }),
        }
        labels = {
            'dni': 'DNI (8 dígitos)',
            'donador': '¿Es donador de órganos?',
        }

    # Validación adicional para el DNI
    def clean_dni(self):
        dni = self.cleaned_data.get('dni')
        if len(dni) != 8 or not dni.isdigit():
            raise forms.ValidationError("El DNI debe tener exactamente 8 dígitos numéricos.")
        return dni