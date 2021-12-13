from django.urls import path

from . import views

urlpatterns = [
    path('create_car', views.CreateCarView.as_view(), name='cars'),
    path('create_dealership', views.CreateDealershipView.as_view(), name='dealerships'),
    path('list_cars', views.ListCarView.as_view(), name='cars'),
    path('list_dealerships', views.ListDealershipView.as_view(), name='dealerships'),
]
