from django.contrib import admin
from .models import User, Company, KYCDocument

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'role', 'is_verified', 'created_at')
    list_filter = ('role', 'is_verified', 'is_active')
    search_fields = ('username', 'email', 'phone')

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'code', 'contact_email', 'is_active', 'created_at')
    list_filter = ('is_active',)
    search_fields = ('name', 'code', 'contact_email')

@admin.register(KYCDocument)
class KYCDocumentAdmin(admin.ModelAdmin):
    list_display = ('user', 'document_type', 'status', 'submitted_at', 'reviewed_by')
    list_filter = ('status', 'document_type')
    search_fields = ('user__username', 'user__email')