from flask import *

app = Flask(__name__)
app.secret_key = "louisss"


@app.route("/", methods=['POST','GET'])
def index():
    if request.method =='POST' and request.form["keyword"] != "":
        session['keyword'] = request.form["keyword"]
        return redirect(url_for('results'))
    return render_template("index.html")

@app.route("/results", methods=['POST','GET'])
def results():
    return render_template("results.html")
