from rest_framework import serializers
from .models import Booking, CorporateBooking

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
        read_only_fields = ('user', 'created_at', 'updated_at')

class CorporateBookingSerializer(serializers.ModelSerializer):
    booking = BookingSerializer(read_only=True)
    
    class Meta:
        model = CorporateBooking
        fields = '__all__'