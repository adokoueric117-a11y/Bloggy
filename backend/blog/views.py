from django.shortcuts import render
from rest_framework import viewsets

# Create your views here.
from .models import Articles
from .serializers import ArticlesSerializer

class ArticlesViewset(viewsets.ModelViewSet):
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializer