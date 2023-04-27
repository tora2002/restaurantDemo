from mongoengine import Document, EmbeddedDocument, StringField, FloatField, ListField, EmbeddedDocumentField

class ShoppingCartItem(EmbeddedDocument):
    id = StringField(required=True)
    name = StringField(required=True)
    price = FloatField(required=True)
    quantity = FloatField(required=True)


