from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

from rest_framework import generics

from .serializers import CarSerializer, DealershipSerializer

from .models import Car, Dealership
# Create your views here.


class CreateCarView(generics.CreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    
class CreateDealershipView(generics.CreateAPIView):
    queryset = Dealership.objects.all()
    serializer_class = DealershipSerializer
    
class ListCarView(generics.ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    
class ListDealershipView(generics.ListAPIView):
    queryset = Dealership.objects.all()
    serializer_class = DealershipSerializer
    
    
    

def index(request):

    template = loader.get_template('cardealership/index.html')
    context = {}
    return HttpResponse(template.render(context, request))


def cars(request):
    cars_list = Car.objects.all
    template = loader.get_template('cardealership/cars.html')
    context = {
        "cars_list": cars_list,
    }
    return HttpResponse(template.render(context, request))


def dealership(request):
    dealership_list = Dealership.objects.all
    template = loader.get_template('cardealership/dealerships.html')
    context = {
        "dealership_list" : dealership_list,
    }
    return HttpResponse(template.render(context, request))


def contact(request):

    template = loader.get_template('cardealership/contact.html')
    context = {}
    return HttpResponse(template.render(context, request))


def aboutus(request):

    template = loader.get_template('cardealership/aboutus.html')
    context = {}
    return HttpResponse(template.render(context, request))
