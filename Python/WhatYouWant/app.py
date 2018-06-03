import os
from flask import Flask
from sqlalchemy.orm import relationship
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand, Manager
from flask import Flask, render_template, url_for, request, redirect

#Static file template
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///{}".format(os.path.join(python/whatyouwant, "project.db"))
db = SQLAlchemy(app)

from models import db  # <-- this needs to be placed after app is created
migrate = Migrate(app, db)

manager = Manager(app)
manager.add_command('db', MigrateCommand) 

#Adding tags
tags = db.Table('tags',
    db.Column('tag_id', db.Integer, db.ForeignKey('tag.id')),
    db.Column('venue', db.Integer, db.ForeignKey('venue.veuneName'), primary_key=True)
)
    
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
