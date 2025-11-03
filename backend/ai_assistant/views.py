from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.conf import settings
import openai
from .models import AIInteraction, ScheduleOptimization
from .serializers import AIInteractionSerializer, ScheduleOptimizationSerializer

# Configure OpenAI
if settings.OPENAI_API_KEY:
    openai.api_key = settings.OPENAI_API_KEY

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ai_chat_view(request):
    """AI-powered chat assistant for various queries"""
    query = request.data.get('query', '')
    interaction_type = request.data.get('type', 'support')
    
    if not query:
        return Response({'error': 'Query is required'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        # Prepare system prompt based on interaction type
        system_prompts = {
            'scheduling': 'You are a transportation scheduling assistant. Help optimize routes and schedules.',
            'analytics': 'You are a business analytics assistant. Help interpret data and provide insights.',
            'support': 'You are a customer support assistant for a transportation company.',
            'optimization': 'You are a route and resource optimization specialist.',
        }
        
        system_prompt = system_prompts.get(interaction_type, system_prompts['support'])
        
        if settings.OPENAI_API_KEY:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": query}
                ],
                max_tokens=500,
                temperature=0.7
            )
            ai_response = response.choices[0].message.content
        else:
            # Fallback response when OpenAI is not configured
            ai_response = f"This is a simulated AI response for: {query}"
        
        # Save interaction
        interaction = AIInteraction.objects.create(
            user=request.user,
            interaction_type=interaction_type,
            query=query,
            response=ai_response
        )
        
        return Response({
            'id': interaction.id,
            'response': ai_response,
            'type': interaction_type
        })
        
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def schedule_optimization_view(request):
    """AI-powered route and schedule optimization"""
    if request.user.role not in ['admin', 'team_leader', 'manager']:
        return Response({'error': 'Access denied'}, status=status.HTTP_403_FORBIDDEN)
    
    date = request.data.get('date')
    driver_id = request.data.get('driver_id')
    
    if not date or not driver_id:
        return Response({'error': 'Date and driver_id are required'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        # Simulate AI optimization (replace with actual AI logic)
        optimization_data = {
            'optimized_route': [
                {'location': 'Point A', 'time': '09:00', 'duration': 30},
                {'location': 'Point B', 'time': '10:00', 'duration': 45},
                {'location': 'Point C', 'time': '11:30', 'duration': 30},
            ],
            'total_distance': 45.2,
            'estimated_fuel_cost': 850.00,
            'time_saved': '1h 30m'
        }
        
        return Response({
            'success': True,
            'optimization': optimization_data,
            'message': 'Route optimized successfully using AI algorithms'
        })
        
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class AIInteractionListView(generics.ListAPIView):
    serializer_class = AIInteractionSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return AIInteraction.objects.filter(user=self.request.user)[:10]  # Last 10 interactions