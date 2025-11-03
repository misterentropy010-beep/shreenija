from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('login/', views.login_view, name='login'),
    path('me/', views.profile_view, name='profile'),
    path('admin/stats/', views.admin_stats_view, name='admin_stats'),
    path('kyc/', views.KYCDocumentView.as_view(), name='kyc_documents'),
]