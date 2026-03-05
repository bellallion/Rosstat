from django.shortcuts import render
from rest_framework import viewsets

from map.models import PopulationData, EmploymentRussia
from .serializer import PopulationDataSerializer, EmploymentRussiaSerializer

# контроллеры

class PopulationDataApiView(viewsets.ModelViewSet):
    queryset = PopulationData.objects.all()
    serializer_class = PopulationDataSerializer
    http_method_names = ['get']

class EmploymentRussiaApiView(viewsets.ModelViewSet):
    queryset = EmploymentRussia.objects.all()
    serializer_class = EmploymentRussiaSerializer
    http_method_names = ['get']

