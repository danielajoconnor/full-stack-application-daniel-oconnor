from flask import Flask, render_template, redirect, Blueprint
from views import my_view

app = Flask(__name__)
app.register_blueprint(my_view)

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html", e=e)

@app.errorhandler(500)
def internal_server_error(e):
    return render_template("500.html", e=e)


if __name__ == "__main__":
    app.run(port=8000)
