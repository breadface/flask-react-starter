from flask import Flask, render_template
from app import app

@app.route("/index")
@app.route("/")
def index():
    return render_template('index.html')

@app.errorhandler(404)
def not_found(e):
    return render_template('index.html')
