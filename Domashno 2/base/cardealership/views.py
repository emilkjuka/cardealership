from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse


def index(request):
    return HttpResponse("Welcome to our car dealership app")

def aboutus(request):
    return HttpResponse("About us")

def contact(request):
    return HttpResponse("Contact page")

def cars(request):
    return HttpResponse("Car sort")

def dealership(request):
    return HttpResponse("Dealership Sort")


