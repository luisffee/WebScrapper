from flask import Flask,request
from flask import render_template
from flask import jsonify

app = Flask(__name__)

def htmlEstatico():
    return render_template('results.html')

@app.route("/")
def index():
    return htmlEstatico()

