from django.db import models

import string

# Create your models here.

class Dealership(models.Model):
    dealership_name = models.CharField(max_length=50)
    dealership_x_coordinate = models.DecimalField(decimal_places=7, max_digits=12)
    dealership_y_coordinate = models.DecimalField(decimal_places=7, max_digits=12)
    
    def __str__(self):
        return f"{self.dealership_name} x:{self.dealership_x_coordinate} y:{self.dealership_y_coordinate}"
       
class Car(models.Model):
    New = 'New'
    Used = 'Used'
    car_model = models.CharField(max_length=50)
    car_brand = models.CharField(max_length=50)
    car_production_year = models.DateField(max_length=50)
    car_type = models.CharField(max_length=50)
    car_price = models.CharField(max_length=50)
    car_color = models.CharField(default= "",max_length=50, null=True)
    car_state = models.CharField(max_length=50, choices=[('New','New'), ['Used', 'Used']])
    DealershipFK = models.ForeignKey(Dealership, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.car_brand} {self.car_model} {self.car_color}"
    


