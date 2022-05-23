from flask import Blueprint, render_template, redirect, url_for, Blueprint, request, abort

my_view = Blueprint('my_view', __name__)


@my_view.route("/")
def home():
    return render_template("index.html")

@my_view.route("/home")  
def home_redirect():
    return redirect(url_for("my_view.home"))

@my_view.route("/about")
def about():
    return render_template("about.html")

@my_view.route("/contact")
def contact():
    return render_template("contact.html")

@my_view.route("/admin")
def admin():
    return render_template("admin.html")

@my_view.route("/recommended")
def recommended():
    return render_template("recommended.html")

@my_view.route("/bundles")
def bundles():
    return render_template("bundles.html")
