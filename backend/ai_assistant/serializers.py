from rest_framework import serializers
from .models import AIInteraction, ScheduleOptimization

class AIInteractionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIInteraction
        fields = '__all__'
        read_only_fields = ('user', 'created_at')

class ScheduleOptimizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduleOptimization
        fields = '__all__'