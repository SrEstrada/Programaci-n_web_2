from django.shortcuts import render
from rest_framework import viewsets
from .models import Movie
from .serializer import MovieSerializer

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
