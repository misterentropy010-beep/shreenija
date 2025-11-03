from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Booking, CorporateBooking
from .serializers import BookingSerializer, CorporateBookingSerializer

class BookingListCreateView(generics.ListCreateAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class BookingDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def booking_stats_view(request):
    if request.user.role not in ['admin', 'team_leader', 'manager']:
        return Response({'error': 'Access denied'}, status=status.HTTP_403_FORBIDDEN)
    
    stats = {
        'total_bookings': Booking.objects.count(),
        'pending_bookings': Booking.objects.filter(status='pending').count(),
        'completed_bookings': Booking.objects.filter(status='completed').count(),
        'revenue_this_month': 25000,  # Placeholder
    }
    return Response(stats)

class CorporateBookingView(generics.ListCreateAPIView):
    serializer_class = CorporateBookingSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        if self.request.user.role == 'corporate':
            return CorporateBooking.objects.filter(booking__user=self.request.user)
        elif self.request.user.role in ['admin', 'manager']:
            return CorporateBooking.objects.all()
        return CorporateBooking.objects.none()