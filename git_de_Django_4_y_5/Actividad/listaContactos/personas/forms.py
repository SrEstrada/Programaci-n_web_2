from django import forms

class RawPersonaForm(forms.Form):
    nombres = forms.CharField(
        label='Nombre completo',
        widget=forms.Textarea(attrs={
            'placeholder': 'Ej: Juan Pérez',
            'class': 'mi-clase-css',  # Para estilos luego
            'rows': 3,  # Altura del Textarea
        })
    )
    apellidos = forms.CharField()
    edad = forms.IntegerField(initial=20)
    def clean_edad(self):
        edad = self.cleaned_data.get('edad')
        if edad < 0:
            raise forms.ValidationError("¡La edad no puede ser negativa!")
        if edad > 120:
            raise forms.ValidationError("¡Edad demasiado alta!")
        return edad
    donador = forms.BooleanField(required=False)