from rest_framework import serializers
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
    WorkInSpecialitySPO
    )

#---Численность населения
class PopulationDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationData
        fields = '__all__'

#---занятость и безработица в России по месяцам
class EmploymentRussiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploymentRussia
        fields = '__all__'

#---Справочник видов экономической деятельности
class EconomicActivityTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EconomicActivityType
        fields = '__all__'
        
#---Значения занятости по годам для каждого вида деятельности
class EmploymentByTypeOfWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploymentByTypeOfWork
        fields = '__all__'

#---Данные о рабочих местах по годам
class JobsByTypeOfWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobsByTypeOfWork
        fields = '__all__'

#---Занятость выпускников вузов. Высшее образование
class WorkingGraduatesHESerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkingGraduatesHE
        fields = '__all__'

#---Занятость выпускников вузов. Среднее профессиональное образование
class WorkingGraduatesSPOSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkingGraduatesSPO
        fields = '__all__'

#---Справочник специальностей
class SpecialtyTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecialtyType
        fields = '__all__'

#---Трудоустройство выпускников по специальностям. Высшее образование
class WorkInSpecialityHESerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkInSpecialityHE
        fields = '__all__'

#---Трудоустройство выпускников по специальностям. Средние профессиональное образование
class WorkInSpecialitySPOSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkInSpecialitySPO
        fields = '__all__'

