#! python3
import requests
res = requests.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+","+longitude+"&radius="+radius+"&types=restaurant&key=AIzaSyDYPbAbZwxr7E13PdJ6B_ExhBXbZQiL1Sw')
res.json()

  
print(res.json)