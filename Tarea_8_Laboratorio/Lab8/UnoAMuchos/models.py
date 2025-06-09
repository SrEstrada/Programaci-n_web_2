from django.db import models

class Language(models.Model):
    name = models.CharField(max_length=50)

class Framework(models.Model): 
    name = models.CharField(max_length=50)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)