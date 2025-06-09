from django.db import models

class Language(models.Model):
    name = models.CharField(max_length=50)

class Framework(models.Model): 
    name = models.CharField(max_length=50)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)

class Movie (models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name
    
class Character(models.Model):
    name = models.CharField(max_length=10)
    movie = models.ManyToManyField(Movie)

    def __str__(self):
        return self.name