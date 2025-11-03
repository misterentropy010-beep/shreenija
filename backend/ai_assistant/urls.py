from django.urls import path
from . import views

urlpatterns = [
    path('chat/', views.ai_chat_view, name='ai_chat'),
    path('optimize/', views.schedule_optimization_view, name='schedule_optimization'),
    path('interactions/', views.AIInteractionListView.as_view(), name='ai_interactions'),
]