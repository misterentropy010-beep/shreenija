"""
Django management command to create sample data for demo
"""
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from users.models import Company, KYCDocument
from bookings.models import Booking, CorporateBooking
from datetime import datetime, timedelta
import random

User = get_user_model()

class Command(BaseCommand):
    help = 'Create sample data for demo'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Creating sample data...'))

        # Create sample company
        company, created = Company.objects.get_or_create(
            code='DEMO_CORP',
            defaults={
                'name': 'Demo Corporation',
                'address': '123 Business Street, Mumbai',
                'contact_email': 'admin@democorp.com',
                'contact_phone': '+91 9876543210'
            }
        )

        # Create sample users
        users_data = [
            {
                'username': 'admin',
                'email': 'admin@shreenija.com',
                'first_name': 'Admin',
                'last_name': 'User',
                'role': 'admin',
                'is_superuser': True,
                'is_staff': True
            },
            {
                'username': 'teamleader1',
                'email': 'tl@shreenija.com', 
                'first_name': 'Team',
                'last_name': 'Leader',
                'role': 'team_leader'
            },
            {
                'username': 'manager1',
                'email': 'manager@shreenija.com',
                'first_name': 'Project',
                'last_name': 'Manager', 
                'role': 'manager'
            },
            {
                'username': 'driver1',
                'email': 'driver1@shreenija.com',
                'first_name': 'Rajesh',
                'last_name': 'Kumar',
                'role': 'driver',
                'phone': '+91 9876543211'
            },
            {
                'username': 'driver2',
                'email': 'driver2@shreenija.com',
                'first_name': 'Amit',
                'last_name': 'Singh',
                'role': 'driver',
                'phone': '+91 9876543212'
            },
            {
                'username': 'user1',
                'email': 'user@example.com',
                'first_name': 'John',
                'last_name': 'Customer',
                'role': 'user'
            },
            {
                'username': 'corporate1',
                'email': 'corporate@democorp.com',
                'first_name': 'Corporate',
                'last_name': 'Client',
                'role': 'corporate',
                'company_id': company.code
            }
        ]

        created_users = {}
        for user_data in users_data:
            user, created = User.objects.get_or_create(
                username=user_data['username'],
                defaults=user_data
            )
            if created:
                user.set_password('password123')
                user.save()
                self.stdout.write(f'Created user: {user.username}')
            created_users[user_data['username']] = user

        # Create sample bookings
        bookings_data = [
            {
                'user': created_users['user1'],
                'booking_type': 'cab',
                'pickup_location': 'Mumbai Airport',
                'destination': 'Bandra West',
                'pickup_time': datetime.now() + timedelta(hours=2),
                'total_amount': 450.00,
                'status': 'confirmed'
            },
            {
                'user': created_users['user1'],
                'booking_type': 'hotel',
                'hotel_location': 'Goa',
                'check_in': datetime.now().date() + timedelta(days=7),
                'check_out': datetime.now().date() + timedelta(days=10),
                'guests': 2,
                'total_amount': 12000.00,
                'status': 'pending'
            },
            {
                'user': created_users['corporate1'],
                'booking_type': 'cab',
                'pickup_location': 'Office Complex',
                'destination': 'Client Location',
                'pickup_time': datetime.now() + timedelta(hours=1),
                'total_amount': 650.00,
                'status': 'confirmed'
            }
        ]

        for booking_data in bookings_data:
            booking, created = Booking.objects.get_or_create(
                user=booking_data['user'],
                booking_type=booking_data['booking_type'],
                pickup_location=booking_data.get('pickup_location', ''),
                defaults=booking_data
            )
            if created:
                self.stdout.write(f'Created booking: {booking.id}')

        # Create corporate booking for demo
        corp_booking = Booking.objects.filter(user=created_users['corporate1']).first()
        if corp_booking:
            corporate_detail, created = CorporateBooking.objects.get_or_create(
                booking=corp_booking,
                defaults={
                    'company': company.name,
                    'employee_name': 'Corporate Client',
                    'employee_id': 'EMP001',
                    'approved_by': created_users['admin']
                }
            )

        self.stdout.write(
            self.style.SUCCESS(
                '\n✅ Sample data created successfully!'
                '\n\n📋 Demo Accounts:'
                '\n- Admin: admin@shreenija.com / password123'
                '\n- Team Leader: tl@shreenija.com / password123' 
                '\n- Manager: manager@shreenija.com / password123'
                '\n- Driver: driver1@shreenija.com / password123'
                '\n- User: user@example.com / password123'
                '\n- Corporate: corporate@democorp.com / password123'
                '\n\n🚀 Ready for demo!'
            )
        )