from django.db import models
from users.models import User

class AIInteraction(models.Model):
    INTERACTION_TYPES = [
        ('scheduling', 'Schedule Assistant'),
        ('analytics', 'Analytics Query'),
        ('support', 'Customer Support'),
        ('optimization', 'Route Optimization'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='ai_interactions')
    interaction_type = models.CharField(max_length=20, choices=INTERACTION_TYPES)
    query = models.TextField()
    response = models.TextField()
    metadata = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'ai_interactions'
        ordering = ['-created_at']

class ScheduleOptimization(models.Model):
    date = models.DateField()
    driver = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'driver'})
    optimized_route = models.JSONField(default=dict)
    estimated_time = models.DurationField()
    estimated_fuel_cost = models.DecimalField(max_digits=10, decimal_places=2)
    ai_confidence = models.FloatField(default=0.8)
    applied = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'schedule_optimizations'