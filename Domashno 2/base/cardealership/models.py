from django.db import models

import string

# Create your models here.

class Dealership(models.Model):
    dealership_name = models.CharField(max_length=50)
    dealership_y_coordinate = models.DecimalField(decimal_places=7, max_digits=12)
    dealership_x_coordinate = models.DecimalField(decimal_places=7, max_digits=12)
    
    def __str__(self):
        return f"{self.dealership_name} y:{self.dealership_y_coordinate} x:{self.dealership_x_coordinate}"
       
class Car(models.Model):
    car_id = models.IntegerField(default=-1)
    car_brand = models.CharField(max_length=50)
    car_model = models.CharField(max_length=50)
    car_production_year = models.CharField(max_length=10)
    car_type = models.CharField(max_length=50)
    car_color = models.CharField(default= "",max_length=50)
    car_price = models.CharField(max_length=50)
    car_state = models.CharField(max_length=50, choices=[('New','New'), ['Used', 'Used']])
    DealershipFK = models.IntegerField(default = 1)
    
    def __str__(self):
        return f"{self.car_brand} {self.car_model} {self.car_color}"
    


