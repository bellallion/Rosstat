from django.shortcuts import render
from rest_framework import viewsets
import csv
from django.http import HttpResponse
from rest_framework.decorators import action

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
    WorkForceLevel,
    WorkForceHE
    )
from .serializer import (
    RegionsRFSerializer,
    LaborForceRegionSerializer,
    PopulationRegionSerializer,
    WorkForceLevelSerializer,
    WorkForceHESerializer
    )

# Функция для генерациии csv

def generate_csv_response(queryset, filename, field_names, header_labels):
    """
    queryset: набор объектов из базы данных
    filename: имя файла для скачивания
    field_names: список имен полей модели 
    header_labels: список заголовков столбцов 
    """
    response = HttpResponse(content_type='text/csv; charset=utf-8')
    response['Content-Disposition'] = f'attachment; filename="{filename}"'
    
    response.write('\ufeff')
    
    writer = csv.writer(response, delimiter=';')
    writer.writerow(header_labels)
    
    for row in queryset.values_list(*field_names):
        writer.writerow(row)
        
    return response



# контроллеры

#---------------------map-------------------------------------


#---Численность населения

class PopulationDataApiView(viewsets.ModelViewSet):
    queryset = PopulationData.objects.all()
    serializer_class = PopulationDataSerializer
    http_method_names = ['get']

    @action(detail=False, methods=['get'], url_path='csv')
    def export_csv(self, request):
        return generate_csv_response(
            self.get_queryset(),
            "population_data.csv",
            ['year', 'total_population', 'urban_population', 'rural_population', 'urban_percentage', 'rural_percentage'],
            ['Год', 'Численность населения', 'Городское население', 'Сельское население', '% Городского', '% Сельского']
        )

#---занятость и безработица в России по месяцам

class EmploymentRussiaApiView(viewsets.ModelViewSet):
    queryset = EmploymentRussia.objects.all()
    serializer_class = EmploymentRussiaSerializer
    http_method_names = ['get']

    @action(detail=False, methods=['get'], url_path='csv')
    def export_csv(self, request):
        return generate_csv_response(
            self.get_queryset(),
            "employment_russia.csv",
            ['year', 'month', 'labor_force', 'employ_people', 'unemployed_people', 'percent_employed', 'percent_unemployed'],
            ['Год', 'Месяц', 'Рабочая сила', 'Занятые', 'Безработные', '% Занятых', '% Безработных']
        )

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

    @action(detail=False, methods=['get'], url_path='csv')
    def export_csv(self, request):
        qs = self.get_queryset().values('activity_type__name', 'year', 'value')
        
        response = HttpResponse(content_type='text/csv; charset=utf-8')
        response['Content-Disposition'] = 'attachment; filename="employment_by_type.csv"'
        response.write('\ufeff')
        writer = csv.writer(response)
        writer.writerow(['Вид деятельности', 'Год', 'Численность занятых (тыс.)'])
        
        for row in qs:
            writer.writerow([row['activity_type__name'], row['year'], row['value']])
            
        return response

#---Данные о рабочих местах по годам

class JobsByTypeOfWorkApiView(viewsets.ModelViewSet):
    queryset = JobsByTypeOfWork.objects.all()
    serializer_class = JobsByTypeOfWorkSerializer
    http_method_names = ['get']

    @action(detail=False, methods=['get'], url_path='csv')
    def export_csv(self, request):
        qs = self.get_queryset().values('activity_type__name', 'year', 'created', 'liquidated')
        
        response = HttpResponse(content_type='text/csv; charset=utf-8')
        response['Content-Disposition'] = 'attachment; filename="jobs_by_type.csv"'
        response.write('\ufeff')
        writer = csv.writer(response, delimiter=';')
        writer.writerow(['Вид деятельности', 'Год', 'Создано рабочих мест', 'Ликвидировано рабочих мест'])
        
        for row in qs:
            writer.writerow([row['activity_type__name'], row['year'], row['created'], row['liquidated']])
            
        return response

#---Занятость выпускников вузов. Высшее образование

class WorkingGraduatesHEApiView(viewsets.ModelViewSet):
    queryset = WorkingGraduatesHE.objects.all()
    serializer_class = WorkingGraduatesHESerializer
    http_method_names = ['get']

    @action(detail=False, methods=['get'], url_path='csv')
    def export_csv(self, request):
        qs = self.get_queryset().values('activity_type__name', 'year', 'all_people', 'working', 'not_working', 'can_not_work')
        
        response = HttpResponse(content_type='text/csv; charset=utf-8')
        response['Content-Disposition'] = 'attachment; filename="graduates_he_employment.csv"'
        response.write('\ufeff')
        writer = csv.writer(response, delimiter=';')
        writer.writerow(['Отрасль', 'Год', 'Всего выпускников', 'Занятые', 'Безработные', 'Вне рабочей силы'])
        
        for row in qs:
            writer.writerow([row['activity_type__name'], row['year'], row['all_people'], row['working'], row['not_working'], row['can_not_work']])
            
        return response

#---Занятость выпускников вузов. Среднее профессиональное образование

class WorkingGraduatesSPOApiView(viewsets.ModelViewSet):
    queryset = WorkingGraduatesSPO.objects.all()
    serializer_class = WorkingGraduatesSPOSerializer
    http_method_names = ['get']

    @action(detail=False, methods=['get'], url_path='csv')
    def export_csv(self, request):
        qs = self.get_queryset().values('activity_type__name', 'year', 'all_people', 'working', 'not_working', 'can_not_work')
        
        response = HttpResponse(content_type='text/csv; charset=utf-8')
        response['Content-Disposition'] = 'attachment; filename="graduates_spo_employment.csv"'
        response.write('\ufeff')
        writer = csv.writer(response, delimiter=';')
        writer.writerow(['Отрасль', 'Год', 'Всего выпускников', 'Занятые', 'Безработные', 'Вне рабочей силы'])
        
        for row in qs:
            writer.writerow([row['activity_type__name'], row['year'], row['all_people'], row['working'], row['not_working'], row['can_not_work']])
            
        return response

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

    @action(detail=False, methods=['get'], url_path='csv')
    def export_csv(self, request):
        qs = self.get_queryset().values('special_type__name', 'year', 'works_by_profession', 'works_not_by_profession')
        
        response = HttpResponse(content_type='text/csv; charset=utf-8')
        response['Content-Disposition'] = 'attachment; filename="he_specialty_employment.csv"'
        response.write('\ufeff')
        writer = csv.writer(response, delimiter=';')
        writer.writerow(['Специальность', 'Год', 'Работают по специальности', 'Работают не по специальности'])
        
        for row in qs:
            writer.writerow([row['special_type__name'], row['year'], row['works_by_profession'], row['works_not_by_profession']])
            
        return response

#---Трудоустройство выпускников по специальностям. Средние профессиональное образование

class WorkInSpecialitySPOApiView(viewsets.ModelViewSet):
    queryset = WorkInSpecialitySPO.objects.all()
    serializer_class = WorkInSpecialitySPOSerializer
    http_method_names = ['get']

    @action(detail=False, methods=['get'], url_path='csv')
    def export_csv(self, request):
        qs = self.get_queryset().values('special_type__name', 'year', 'works_by_profession', 'works_not_by_profession')
        
        response = HttpResponse(content_type='text/csv; charset=utf-8')
        response['Content-Disposition'] = 'attachment; filename="spo_specialty_employment.csv"'
        response.write('\ufeff')
        writer = csv.writer(response, delimiter=';')
        writer.writerow(['Специальность', 'Год', 'Работают по специальности', 'Работают не по специальности'])
        
        for row in qs:
            writer.writerow([row['special_type__name'], row['year'], row['works_by_profession'], row['works_not_by_profession']])
            
        return response


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
    def get_queryset(self):
        queryset = LaborForceRegion.objects.all()
        region_id = self.request.query_params.get('region')
        
        if region_id is not None:
            queryset = queryset.filter(region_id=region_id)
    
        return queryset

#---Численность населения по регионам РФ

class PopulationRegionApiView(viewsets.ModelViewSet):
    serializer_class = PopulationRegionSerializer
    http_method_names = ['get']
    def get_queryset(self):
        queryset = PopulationRegion.objects.all()
        region_id = self.request.query_params.get('region')
        if region_id is not None:
            queryset = queryset.filter(region_id=region_id)
        return queryset

#---Уровень участия в рабочей силе по регионам РФ

class WorkForceLevelApiView(viewsets.ModelViewSet):
    serializer_class = WorkForceLevelSerializer
    http_method_names = ['get']
    def get_queryset(self):
        queryset = WorkForceLevel.objects.all()
        region_id = self.request.query_params.get('region')
        if region_id is not None:
            queryset = queryset.filter(region_id=region_id)
        return queryset

#---Доля работников с высшим образованием по регионам РФ

class WorkForceHEApiView(viewsets.ModelViewSet):
    serializer_class = WorkForceHESerializer
    http_method_names = ['get']
    def get_queryset(self):
        queryset = WorkForceHE.objects.all()
        region_id = self.request.query_params.get('region')
        if region_id is not None:
            queryset = queryset.filter(region_id=region_id)
        return queryset