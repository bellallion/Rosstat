from django.shortcuts import render
from rest_framework import viewsets

from map.models import (
    PopulationData, 
    EmploymentRussia,
    EconomicActivityType,
    EmploymentByTypeOfWork,
    JobsByTypeOfWork,
    WorkingGraduatesHE,
    WorkingGraduatesSPO,
    SpecialtyType,
    WorkInSpecialityHE,
    WorkInSpecialitySPO,
    )
from .serializer import (
    PopulationDataSerializer, 
    EmploymentRussiaSerializer,
    EconomicActivityTypeSerializer,
    EmploymentByTypeOfWorkSerializer,
    JobsByTypeOfWorkSerializer,
    WorkingGraduatesHESerializer,
    WorkingGraduatesSPOSerializer,
    SpecialtyTypeSerializer,
    WorkInSpecialityHESerializer,
    WorkInSpecialitySPOSerializer
    )

from regions.models import (
    RegionsRF,
    LaborForceRegion,
    PopulationRegion,
    WorkForceLevel
    )
from .serializer import (
    RegionsRFSerializer,
    LaborForceRegionSerializer,
    PopulationRegionSerializer,
    WorkForceLevelSerializer
    )

# контроллеры

#---------------------map-------------------------------------

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

#---Занятость выпускников вузов. Высшее образование

class WorkingGraduatesHEApiView(viewsets.ModelViewSet):
    queryset = WorkingGraduatesHE.objects.all()
    serializer_class = WorkingGraduatesHESerializer
    http_method_names = ['get']

#---Занятость выпускников вузов. Среднее профессиональное образование

class WorkingGraduatesSPOApiView(viewsets.ModelViewSet):
    queryset = WorkingGraduatesSPO.objects.all()
    serializer_class = WorkingGraduatesSPOSerializer
    http_method_names = ['get']

#---Справочник специальностей

class SpecialtyTypeApiView(viewsets.ModelViewSet):
    queryset = SpecialtyType.objects.all()
    serializer_class = SpecialtyTypeSerializer
    http_method_names = ['get']

#---Трудоустройство выпускников по специальностям. Высшее образование

class WorkInSpecialityHEApiView(viewsets.ModelViewSet):
    queryset = WorkInSpecialityHE.objects.all()
    serializer_class = WorkInSpecialityHESerializer
    http_method_names = ['get']

#---Трудоустройство выпускников по специальностям. Средние профессиональное образование

class WorkInSpecialitySPOApiView(viewsets.ModelViewSet):
    queryset = WorkInSpecialitySPO.objects.all()
    serializer_class = WorkInSpecialitySPOSerializer
    http_method_names = ['get']


#---------------------regions-------------------------------------

#---Справочник регионов РФ

class RegionsRFApiView(viewsets.ModelViewSet):
    queryset = RegionsRF.objects.all()
    serializer_class = RegionsRFSerializer
    http_method_names = ['get']

#---Численность рабочей силы по регионам РФ

class LaborForceRegionApiView(viewsets.ModelViewSet):
    queryset = LaborForceRegion.objects.all()
    serializer_class = LaborForceRegionSerializer
    http_method_names = ['get']

#---Численность населения по регионам РФ

class PopulationRegionApiView(viewsets.ModelViewSet):
    queryset = PopulationRegion.objects.all()
    serializer_class = PopulationRegionSerializer
    http_method_names = ['get']

#---Уровень участия в рабочей силе по регионам РФ

class WorkForceLevelApiView(viewsets.ModelViewSet):
    queryset = WorkForceLevel.objects.all()
    serializer_class = WorkForceLevelSerializer
    http_method_names = ['get']