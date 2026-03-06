from django.shortcuts import render
from rest_framework import viewsets

from map.models import (
    PopulationData, 
    EmploymentRussia,
    EconomicActivityType,
    EmploymentByTypeOfWork,
    JobsByTypeOfWork
    )
from .serializer import (
    PopulationDataSerializer, 
    EmploymentRussiaSerializer,
    EconomicActivityTypeSerializer,
    EmploymentByTypeOfWorkSerializer,
    JobsByTypeOfWorkSerializer
    )

# контроллеры

#---Численность населения

class PopulationDataApiView(viewsets.ModelViewSet):
    queryset = PopulationData.objects.all()
    serializer_class = PopulationDataSerializer
    http_method_names = ['get']

#---занятость и безработица в России по месяцам

class EmploymentRussiaApiView(viewsets.ModelViewSet):
    queryset = EmploymentRussia.objects.all()
    serializer_class = EmploymentRussiaSerializer
    http_method_names = ['get']

#---Справочник видов экономической деятельности

class EconomicActivityTypeApiView(viewsets.ModelViewSet):
    queryset = EconomicActivityType.objects.all()
    serializer_class = EconomicActivityTypeSerializer
    http_method_names = ['get']

#---Значения занятости по годам для каждого вида деятельности

class EmploymentByTypeOfWorkApiView(viewsets.ModelViewSet):
    queryset = EmploymentByTypeOfWork.objects.all()
    serializer_class = EmploymentByTypeOfWorkSerializer
    http_method_names = ['get']

#---Данные о рабочих местах по годам

class JobsByTypeOfWorkApiView(viewsets.ModelViewSet):
    queryset = JobsByTypeOfWork.objects.all()
    serializer_class = JobsByTypeOfWorkSerializer
    http_method_names = ['get']

