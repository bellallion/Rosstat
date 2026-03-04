from django.shortcuts import render
from rest_framework import viewsets

from map.models import PopulationData
from .serializer import PopulationDataSerializer

# контроллеры

class PopulationDataApiView(viewsets.ModelViewSet):
    queryset = PopulationData.objects.all()
    serializer_class = PopulationDataSerializer
    http_method_names = ['get']

