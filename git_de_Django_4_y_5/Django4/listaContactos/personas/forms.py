from django import forms

class RawPersonaForm(forms.Form):
    nombres = forms.CharField(label='Nombre completo')
    apellidos = forms.CharField()
    edad = forms.IntegerField(initial=20)
    donador = forms.BooleanField(required=False)