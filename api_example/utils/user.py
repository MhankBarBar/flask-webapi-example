from secrets import token_urlsafe
from api_example import db
from api_example.models import User
from werkzeug.security import generate_password_hash
from functools import wraps
from flask import *

class verif:
    def verif(cih):

        @wraps(cih)
        def cuih(*args, **kwargs):
            if (key := request.args.get('apikey')):
                return cih(*args, **kwargs) if apikey(key).valid else {'status': False, 'msg': 'Invalid apikey'}
            else:
                return {'status': False, 'msg': 'apikey parameter don\'t empty'}
        return cuih

class apikey:
    def __init__(self, key) -> None:
        self.apikey = key

    @property
    def valid(self):
        return User.query.filter_by(apikey=self.apikey).first()

class account:
    def __init__(self, username, password) -> None:
        self.username = username
        self.password = password

    @property
    def login(self):
        if (user := User.query.filter_by(username=self.username).first()):
            return user if user.check(self.password) else 'Incorrect Password'
        else:return 'Incorrect username'

    @property
    def signup(self):
        users = User(username=self.username, password=self.password, apikey=token_urlsafe(25))
        db.session.add(users)
        db.session.commit()

def verify_login(view):
    # View decorator that redirects anonymous users to login page

    @wraps(view)
    def verify(**kwargs):
        if not g.user:
            return redirect(url_for('auth.login')) 
        else:return view(**kwargs)

    return verify
