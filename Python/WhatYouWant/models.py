from flask import Flask
from flask.ext.script import Manager
from flask.ext.migrate import Migrate, MigrateCommand

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'

from models import db  # <-- this needs to be placed after app is created
migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand)

#Adding a spot to the database
class Spot(db.Model):
    __bind_key__ = 'spot'
    spotName =db.Column(db.String(80), unique=True, nullable=False, primary_key=True)
    spotlat = db.Column(db.Real, unique=True, nullable=False)
    spotlong = db.Column(db.Real, unique=True,nullable=False)

    def __repr__(self):
        return "<Spot: {}>".format(self.spotName) 

#Adding a location for offline use 
class Venue(db.Model):
    __bind_key__ = 'venue'
    veuneName = db.Column(db.String(80), unique=True, nullable=False, primary_key=True)
    venueLocation = db.Column(db.String(80), unique=True, nullable=False)
    venueLat = db.Column(db.Real, unique=True, nullable=False)
    venueLong = db.Column(db.Real, unique=True,nullable=False)
    venuePhone = db.Column(db.Integer, unique=True, nullable=True)
    venueVisit = db.Column(db.Integer, nullable=True)
    venueReview = db.Column(db.Blob, unique=True)
    venueStars =db.Column(db.Integer, nullable=True)
    tags = db.relationship('Tags', secondary=tags, lazy='subquery',
        backref=db.backref('venue', lazy=True))

    def __repr__(self):
       return "<Venue: {}>".format(self.name)
    