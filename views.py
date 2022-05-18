from flask import Blueprint, render_template, redirect, url_for, Blueprint, request

my_view = Blueprint('my_view', __name__)


@my_view.route("/")
def home():
    return render_template("index.html")