from django.contrib import admin
from django.urls import path, include

from .views import index
# routes defined for the main frontend application. These have to correspond with the same name to the ones in the react router
urlpatterns = [
    path('', index),
    path('home', index),
    path('aboutus',index),
    path('contact',index),
    path('cars',index),
    path('dealerships',index),
]
