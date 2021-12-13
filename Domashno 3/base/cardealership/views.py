from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

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
