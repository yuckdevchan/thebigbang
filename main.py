from flask import Flask, render_template, redirect, send_from_directory

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/search/search.js")
def search_js():
    return send_from_directory("search", "search.js")

@app.route("/search")
def search():
    return render_template("search.html")
