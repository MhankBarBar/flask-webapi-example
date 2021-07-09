from flask import Flask
from flask.cli import with_appcontext
from flask_sqlalchemy import SQLAlchemy
import click

db = SQLAlchemy()

def create_app(config=None):
    app = Flask(__name__)
    if config == None:
        app.config.from_pyfile('../config_example.py', silent=True)
    else:
        app.config.update(config)

    db.init_app(app)
    app.cli.add_command(init_db_command)

    from api_example.Api import urls
    app.register_blueprint(urls.bp)
    app.add_url_rule('/', endpoint='index')

    return app

def init_db():
    db.drop_all()
    db.create_all()


@click.command("init-db")
@with_appcontext
def init_db_command():
    # Clear existing data and create new tables
    init_db()
    click.echo('Initialized the database')
