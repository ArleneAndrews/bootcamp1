import os

from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, url_for, request, redirect

project_dir = os.path.dirname(os.path.abspath(__file__))
database_file = "sqlite:///{}".format(os.path.join(project_dir, "whatyouwant.db"))
#Static file template
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = database_file

db = SQLAlchemy(app)

#Adding a spot to the database
class Spot(db.Model):
    spotlat = db.Column(db.String(80), unique=True, nullable=False, primary_key=True)
    spotlong = db.Column(db.String(80), unique=True,nullable=False)
    def __repr__(self):
        #return "<Spot: {}>".format(self.spot) Need to format this

#Adding a location for offline use 
""" class Book(db.Model):
    title = db.Column(db.String(80), unique=True, nullable=False, primary_key=True) """

    def __repr__(self):
        return "<Title: {}>".format(self.title)

#adding a review

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/sw.js', methods=['GET'])
def sw():
    return app.send_static_file('sw.js')

if __name__=='__main__':
    app.run(debug=True)
