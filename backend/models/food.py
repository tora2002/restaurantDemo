from models import db

class Food(db.Document):
    name = db.StringField(required=True)
    location_street = db.StringField(required=True)
    location_city = db.StringField(required=True)
    location_state = db.StringField(required=True, max_length=2)
    location_zipcode = db.IntField(required=True, max_length=5)
    description = db.StringField(required=True)
    tags = db.ListField(db.StringField(), required=True)
    photo = db.ImageField(required=True)
