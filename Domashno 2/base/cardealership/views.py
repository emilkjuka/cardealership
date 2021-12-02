from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
# Create your views here.


def index(request):

    template = loader.get_template('cardealership/index.html')
    context = {}
    return HttpResponse(template.render(context, request))


def cars(request):

    template = loader.get_template('cardealership/cars.html')
    context = {}
    return HttpResponse(template.render(context, request))


def dealership(request):

    template = loader.get_template('cardealership/dealerships.html')
    context = {}
    return HttpResponse(template.render(context, request))


def contact(request):

    template = loader.get_template('cardealership/contact.html')
    context = {}
    return HttpResponse(template.render(context, request))


def aboutus(request):

    template = loader.get_template('cardealership/aboutus.html')
    context = {}
    return HttpResponse(template.render(context, request))
