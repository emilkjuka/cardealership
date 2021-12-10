from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

from .models import Car, Dealership
# Create your views here.


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
