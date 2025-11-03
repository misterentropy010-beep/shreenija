from django.db import models
from users.models import User

class Booking(models.Model):
    BOOKING_TYPE_CHOICES = [
        ('cab', 'Cab Booking'),
        ('hotel', 'Hotel Booking'),
    ]
    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookings')
    booking_type = models.CharField(max_length=10, choices=BOOKING_TYPE_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    
    # Cab booking fields
    pickup_location = models.CharField(max_length=255, blank=True)
    destination = models.CharField(max_length=255, blank=True)
    pickup_time = models.DateTimeField(null=True, blank=True)
    
    # Hotel booking fields
    hotel_location = models.CharField(max_length=255, blank=True)
    check_in = models.DateField(null=True, blank=True)
    check_out = models.DateField(null=True, blank=True)
    guests = models.IntegerField(default=1)
    
    # Common fields
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'bookings'
        ordering = ['-created_at']

class CorporateBooking(models.Model):
    company = models.CharField(max_length=200)
    employee_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=50)
    booking = models.OneToOneField(Booking, on_delete=models.CASCADE, related_name='corporate_details')
    approval_required = models.BooleanField(default=True)
    approved_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='approved_corporate_bookings')
    approved_at = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        db_table = 'corporate_bookings'