from flask import *
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "louisss"

CORS(app)

@app.route("/", methods=['POST','GET'])
def index():
    keyword = ""
    if request.method =='POST' and request.form["keyword"] != "":
        session['keyword'] = request.form["keyword"]
        keyword = str(session['keyword'])
        #return redirect(url_for('results'))
    return render_template("index.html", keyword=keyword)

@app.route("/results", methods=['POST','GET'])
def results():
    return render_template("results.html")
