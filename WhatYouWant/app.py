import os

from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, url_for, request, redirect

project_dir = os.path.dirname(os.path.abspath(__file__))
database_spot = "sqlite:///{}".format(os.path.join(project_dir, "spot.db"))
database_venue = "sqlite:///{}".format(os.path.join(project_dir, "venue.db"))
#Static file template
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = database_spot
app.config["SQLALCHEMY_DATABASE_URI"] = database_venue
dbspot = SQLAlchemy(app)

#Adding a spot to the database
class Spot(db.Model):
    spotName =db.Column(db.String(80), unique=True, nullable=False, primary_key=True)
    spotlat = db.Column(db.String(80), unique=True, nullable=False)
    spotlong = db.Column(db.String(80), unique=True,nullable=False)

    def __init__(self, spotName, spotlat, spotlong):
        self.spotName = spotName
        self.spotlat = spotlat
        self.spotlong = spotlong
    
    def __repr__(self):
        return "<Spot: {}>".format(self.spotName) 

#Adding a location for offline use 
class Venue(db.Model):
    veuneName = db.Column(db.String(80), unique=True, nullable=False, primary_key=True)
    venueLocation = db.Column(db.String(80), unique=True, nullable=False)
    venuePhone = db.Column(db.String(80), unique=True, nullable=False)
    venueVisit = db.Column(db.String(80), unique=True, nullable=False)
    venueYelp = db.Column(db.String(200), unique=True)
    venueStars =db.Column(db.String(80))

    def __repr__(self):
        return "<Venue: {}>".format(self.name, self.location, self.phone, self.visit, self.yelp, self.stars)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/sw.js', methods=['GET'])
def sw():
    return app.send_static_file('sw.js')

if __name__=='__main__':
    app.run(debug=True)
