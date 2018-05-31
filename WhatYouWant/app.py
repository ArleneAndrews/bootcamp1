import os
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, url_for, request, redirect

#Static file template
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///{}".format(os.path.join(project_dir, "project.db"))
db = SQLAlchemy(app)

#Adding tags
tags = db.Table('tags',
    db.Column('tag_id', db.Integer, db.ForeignKey('tag.id')),
    db.Column('venue', db.Integer, db.ForeignKey('venue.veuneName'), primary_key=True)
)

#Adding a spot to the database
class Spot(db.Model):
    __bind_key__ = 'spot'
    spotName =db.Column(db.String(80), unique=True, nullable=False, primary_key=True)
    spotlat = db.Column(db.Float, unique=True, nullable=False)
    spotlong = db.Column(db.Float, unique=True,nullable=False)

    def __repr__(self):
        return "<Spot: {}>".format(self.spotName) 

#Adding a location for offline use 
class Venue(db.Model):
    __bind_key__ = 'venue'
    veuneName = db.Column(db.String(80), unique=True, nullable=False, primary_key=True)
    venueLocation = db.Column(db.String(80), unique=True, nullable=False)
    venuePhone = db.Column(db.Integer, unique=True, nullable=True)
    venueVisit = db.Column(db.Boolean, nullable=True)
    venueReview = db.Column(db.String(200), unique=True)
    venueStars =db.Column(db.Integer, nullable=True)
    tags = db.relationship('Tags', secondary=tags, lazy='subquery',
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
