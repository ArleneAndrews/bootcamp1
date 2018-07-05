# import Flask class from Flask module and template tool
from flask import Flask, render_template, request, url_for, redirect

# create the application object
app = Flask(__name__)

# decorators to link funtion to URL, then return a string
@app.route('/')
def home():
    return "Hello, Sunshine!"

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
            return redirect(url_for('home'))
    return render_template('login.html', error=error)
     

#start the server with 'run()' in debug mode
if __name__ =='__main__':
    app.run(debug=True)