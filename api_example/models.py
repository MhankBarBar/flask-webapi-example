from . import db
from sqlalchemy.ext.hybrid import hybrid_property
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    _password = db.Column('password', db.String, nullable=False)
    apikey = db.Column(db.String)
    profile = db.Column(db.String, default="static/images/profile.jpg")
    registered = db.Column(db.DateTime, default=datetime.now())

    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, value):
        # Store the password as a hash for security
        self._password = generate_password_hash(value)

    def check(self, value):
        return check_password_hash(self.password, value)

    #def __str__(self) -> str:
        #return self.username
