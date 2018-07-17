from flask import Flask, render_template, request, url_for, redirect, session, flash, g
import sqlite3
from functools import wraps

app = Flask(__name__)

#temp secret key
app.secret_key = 'dragon'
# add the database (singular)
app.database = "project.db"

# login required decorator
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            flash('You need to login first.')
            return redirect(url_for('login'))
    return wrap

# decorators to link funtion to URL, then return a string
@app.route('/')
@login_required
def home():
    # return "Hello, Sunshine!"
    g.db = connect_db()
    cur = g.db.execute('select * from posts')
    posts =[]
    
    for row in cur.fetchall():
        posts.append(dict(title=row[0], description=row[1]))
    g.db.close()
    return render_template('index.html', posts=posts)

# render a template
@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

# route for login page logic
@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != 'Slack'  or request.form['password'] !='Links':
            error = "You still haven't found what you're looking for?"
        else:
            session['logged_in'] = True
            flash('You are logged in')
            return redirect(url_for('home'))
    return render_template('login.html', error=error)

# route for log out page, basic auth
@app.route('/logout')
@login_required
def logout():
    session.pop('logged_in', None)
    flash('You are logged out')
    return redirect (url_for('welcome'))

def connect_db():
    return sqlite3.connect(app.database)

"""app.config['PLACES'] = supersecret_key


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
 """
if __name__=='__main__':
    
    app.run(debug=True)
