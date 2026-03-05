from rest_framework import serializers
from map.models import PopulationData, EmploymentRussia

class PopulationDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationData
        fields = '__all__'

class EmploymentRussiaSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploymentRussia
        fields = '__all__'

