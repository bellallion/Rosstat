from rest_framework import serializers
from map.models import (
    PopulationData, 
    EmploymentRussia, 
    EconomicActivityType,
    EmploymentByTypeOfWork
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

