class ShoppingCart(Document):
    user_id = StringField(required=True)
    items = ListField(EmbeddedDocumentField(ShoppingCartItem))
    