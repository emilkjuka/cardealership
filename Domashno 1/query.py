import requests
import json

overpass_url = "http://overpass-api.de/api/interpreter"
overpass_query = """
[out:json][timeout:25];
area[name="Скопје"];
(
  way["shop"="car"](area);
  node["shop"="car"](area);
);
out body;
>;
out skel qt;
"""
response = requests.get(overpass_url, 
                        params={'data': overpass_query})

data = response.json()

with open('dealership_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)



