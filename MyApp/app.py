from flask import Flask, render_template, url_for


#Static file template
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/sw.js', methods=['GET'])
def sw():
    return app.send_static_file('sw.js')

if __name__=='__main__':
    app.run(debug=True)

import geocoder
g = geocoder.ip('me')
print(g.latlng)