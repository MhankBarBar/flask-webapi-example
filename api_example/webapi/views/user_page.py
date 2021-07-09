from api_example import db
from api_example.models import User
from api_example.utils.user import account, verify_login
from flask import *

def register(request):
    if request.method == 'POST':
        user = request.form['username']
        pasw = request.form['password']
        error = None
        if db.session.query(User.query.filter_by(username=user).exists()).scalar():
            error = 'Username is already registered'
        if not error:
            users = account(username=user, password=pasw)
            users.signup
            return redirect(url_for('auth.login'))

        flash(error)

    return render_template('regist.html')

def login(request):
    if request.method == 'POST':
        user = request.form['username']
        pasw = request.form['password']
        users = account(username=user, password=pasw).login
        error = None if not isinstance(users, str) else users
        if not error:
            session.clear()
            session['user_id'] = users.id
            session['password'] = pasw
            return redirect(url_for('index'))

        flash(error)

    return render_template('login.html')

@verify_login
def index():
    return render_template('home.html', user=g.user, ip=request.headers.get('X-Forwarded-For', '127.0.0.1'))#{'username': g.user.username, 'apikey': g.user.apikey}

def notfound():
    return render_template('404.html')
