import random 
import csv

def car_database():
    car_db = open('carDatabase.csv')
    type(car_db)

    # ID;Brand;Model;Year;Type;Color;Price;State;DealershipFK
    car_csv = csv.reader(car_db)
    header = next(car_csv)

    rows = []
    for row in car_csv:
        rows.append(row[0].split(';'))
    
    return rows

        






