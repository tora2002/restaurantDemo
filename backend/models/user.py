from models import db

class User(db.Document):
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True)
    user_name = db.StringField(required=True)
    description = db.StringField(required=True)
    profile_picture = db.ImageField()