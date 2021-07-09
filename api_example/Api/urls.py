from flask import *
from api_example.models import User
from api_example.webapi.views import user_page, api
bp = Blueprint('auth', __name__, url_prefix='/')

@bp.before_app_request
def load_logged_in_user():
    # If a user id is stored in the session
    # load the user object from the database into "g.user".
    user_id = session.get('user_id')
    g.user = User.query.get(user_id) if user_id else None

@bp.app_errorhandler(404)
def e404(e):
    return user_page.notfound(), 404

@bp.route('/register', methods=('GET','POST'))
def register():
    return user_page.register(request)

@bp.route('/login', methods=('GET','POST'))
def login():
    return user_page.login(request)

@bp.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('auth.login'))

@bp.route('/')
def index():
    return user_page.index()

@bp.route('/cnbc', methods=('GET','POST'))
def cnbce():
    return api.cnbeceh(request)
