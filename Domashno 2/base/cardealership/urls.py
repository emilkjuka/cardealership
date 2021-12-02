from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home', views.index, name='index'),
    path('cars', views.cars, name='cars'),
    path('cars/<int:car_id>', views.cars, name='car_details'),
    path('dealerships', views.dealership, name='dealerships'),
    path('contact', views.contact, name='contact'),
    path('aboutus', views.aboutus, name='aboutus'),
]
