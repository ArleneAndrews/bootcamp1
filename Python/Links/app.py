# import Flask class from Flask module and template tool, plus others
from flask import Flask, render_template, request, url_for, redirect, session, flash, g
# functools
from functools import wraps
# import the database
import sqlite3


# create the application object
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
    cur = g.db.execute('select * from project')
    posts = [dict(title=row[0], description=row[1])for row in cur.fetchall()]
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
        if request.form['username'] != 'admin' or request.form['password'] !='admin':
            error = "Invalid Credentials. Are you sure you know who you are?"
        else:
            session['logged_in'] = True
            flash('You are logged in')
            return redirect(url_for('home'))
    return render_template('login.html', error=error)

# route for log out page, basic auth
@app.route('/logout')
@login_required
def logout():
    session.pop('logged_,in', None)
    flash('You are logged out')
    return redirect (url_for('welcome'))

def connect_db():
    return sqlite3.connect(app.database)
  

#start the server with 'run()' in debug mode
if __name__ =='__main__':
    app.run(debug=True)