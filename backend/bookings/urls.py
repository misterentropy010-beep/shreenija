from django.urls import path
from . import views

urlpatterns = [
    path('', views.BookingListCreateView.as_view(), name='bookings'),
    path('<int:pk>/', views.BookingDetailView.as_view(), name='booking_detail'),
    path('stats/', views.booking_stats_view, name='booking_stats'),
    path('corporate/', views.CorporateBookingView.as_view(), name='corporate_bookings'),
]