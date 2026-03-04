from rest_framework import serializers
from map.models import PopulationData

class PopulationDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationData
        fields = '__all__'

