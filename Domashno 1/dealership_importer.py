import json


class Dealership():
    def __init__(self, name, y, x):
        self.name = name
        self.y_coord = y
        self.x_coord = x

    def __str__(self):
        return f"{self.name} {self.y_coord} {self.x_coord}"

def dealership_importer():
    file = open('dealership_data.json', encoding="utf8")
    dealership_data = json.load(file)

    dealerships = []
    for elem in dealership_data['elements']: 
        if "name" in elem["tags"].keys():
            d = Dealership(elem["tags"]["name"], elem["center"]["lat"], elem["center"]["lon"])
        else: 
            d = Dealership("Car Shop", elem["center"]["lat"], elem["center"]["lon"])
        dealerships.append(d)
    
    return dealerships



