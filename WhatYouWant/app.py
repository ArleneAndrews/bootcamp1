import os
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, url_for, request, redirect

project_dir = os.path.dirname(os.path.abspath(__file__))
database_spot = "sqlite:///{}".format(os.path.join(project_dir, "spot.db"))
database_venue = "sqlite:///{}".format(os.path.join(project_dir, "venue.db"))
#Static file template
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db"
SQLALCHEMY_BINDS = {
    'spot':        'mysqldb://localhost/db/spot',
    'venue':        'mysqldb://localhost/db/venue'
}
db = SQLAlchemy(app)

#Adding tags
tags = db.Table('tags',
    db.Column('tag_id', db.Integer, db.ForeignKey('tag.id'), primary_key=True),
    db.Column('venue', db.Integer, db.ForeignKey('venue.veuneName'), primary_key=True)
)

#Adding a spot to the database
class Spot(db.Model):
    __bind_key__ = 'spot'
    spotName =db.Column(db.String(80), unique=True, nullable=False, primary_key=True)
    spotlat = db.Column(db.Float, unique=True, nullable=False)
    spotlong = db.Column(db.Float, unique=True,nullable=False)

    def __init__(self, spotName, spotlat, spotlong):
        self.spotName = spotName
        self.spotlat = spotlat
        self.spotlong = spotlong
    
    def __repr__(self):
        return "<Spot: {}>".format(self.spotName) 

#Adding a location for offline use 
class Venue(db.Model):
    __bind_key__ = 'venue'
    veuneName = db.Column(db.String(80), unique=True, nullable=False, primary_key=True)
    venueLocation = db.Column(db.String(80), unique=True, nullable=False)
    venuePhone = db.Column(db.Integer, unique=True, nullable=True)
    venueVisit = db.Column(db.Boolean, nullable=True)
    venueYelp = db.Column(db.String(200), unique=True)
    venueStars =db.Column(db.Integer, nullable=True)
    tags = db.relationship('Tag', secondary=tags, lazy='subquery',
        backref=db.backref('venue', lazy=True))

    def __repr__(self):
       return "<Venue: {}>".format(self.name)
    
    
class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True)


@app.route('/', methods=['GET'])
def home():
    if request.form:
        spot = Spot(spotName=request.form.get("spotName"))
        db.session.add(spot)
        db.session.commit()
    return render_template("home.html")

def index():
    return render_template('index.html')

@app.route('/sw.js', methods=['GET'])
def sw():
    return app.send_static_file('sw.js')

if __name__=='__main__':
    app.run(debug=True)
