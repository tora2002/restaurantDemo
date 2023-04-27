from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime as datetime

from models import db
from models.user import User

# Setup
app = Flask(__name__)

CORS(app) # To prevent CORS errors during local development
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

app.config["MONGODB_HOST"] = "mongodb+srv://joonyoo181:yU20xMzrLK4N4uEu@tastebuds.syw7ofh.mongodb.net/?retryWrites=true&w=majority"

db.__init__(app)

# Routes
@app.route('/ping')
def pingpong():
    return "pong"

@app.route('/create-user', methods = ['POST'])
def create_user():
    body = request.get_json()
    new_user = User(**body).save()
    return jsonify(new_user)

@app.route('/get-users', methods = ['GET'])
def get_users():
    users = User.objects
    return jsonify(users)

@app.route('/restaurant/<restaurant_id>/menu', methods=['GET'])
def get_menu(restaurant_id):
    menu_items = Menu.objects(restaurant_id=restaurant_id)
    return jsonify(menu_items)

@app.route('/restaurant/<restaurant_id>/menu', methods=['POST'])
def add_menu_item(restaurant_id):
    item = request.get_json()
    new_item = Menu(restaurant_id=restaurant_id, **item).save()
    return jsonify(new_item)

@app.route('/restaurant/<restaurant_id>/menu/<item_id>', methods=['PUT'])
def update_menu_item(restaurant_id, item_id):
    item = request.get_json()
    updated_item = Menu.objects(restaurant_id=restaurant_id, id=item_id).update_one(**item)
    return jsonify(updated_item)

@app.route('/restaurant/<restaurant_id>/menu/<item_id>', methods=['DELETE'])
def delete_menu_item(restaurant_id, item_id):
    deleted_item = Menu.objects(restaurant_id=restaurant_id, id=item_id).delete()
    return jsonify(deleted_item)

@app.route('/user/<user_id>/shopping-cart', methods=['GET'])
def get_shopping_cart(user_id):
    shopping_cart = ShoppingCart.objects(user_id=user_id).first()
    return jsonify(shopping_cart)

@app.route('/user/<user_id>/shopping-cart', methods=['POST'])
def add_to_shopping_cart(user_id):
    item = request.get_json()
    shopping_cart = ShoppingCart.objects(user_id=user_id).first()
    if not shopping_cart:
        shopping_cart = ShoppingCart(user_id=user_id).save()
    shopping_cart.items.append(item)
    shopping_cart.save()
    return jsonify(shopping_cart)

@app.route('/user/<user_id>/shopping-cart/<item_id>', methods=['PUT'])
def update_shopping_cart_item(user_id, item_id):
    item = request.get_json()
    shopping_cart = ShoppingCart.objects(user_id=user_id).first()
    if not shopping_cart:
        return jsonify({"message": "Shopping cart not found"})
    for i, cart_item in enumerate(shopping_cart.items):
        if cart_item['id'] == item_id:
            shopping_cart.items[i] = item
            shopping_cart.save()
            return jsonify(shopping_cart)
    return jsonify({"message": "Item not found in shopping cart"})

@app.route('/user/<user_id>/shopping-cart/<item_id>', methods=['DELETE'])
def remove_from_shopping_cart(user_id, item_id):
    shopping_cart = ShoppingCart.objects(user_id=user_id).first()
    if not shopping_cart:
        return jsonify({"message": "Shopping cart not

def search_menu_items(keyword):
    return Menu.objects(name__icontains=keyword)

def search_cart_items(user_id, keyword):
    return ShoppingCart.objects(
        user_id=user_id, 
        items__name__icontains=keyword
    )
    
def sort_cart_items(user_id, sort_key):
    cart = ShoppingCart.objects(user_id=user_id).first()
    if not cart:
        return []

    items = cart.items
    if sort_key == 'name':
        items = sorted(items, key=lambda i: i.name)
    elif sort_key == 'price':
        items = sorted(items, key=lambda i: i.price)
    else:
        pass

    return items
if __name__ == "__main__":
    app.run(debug=True)

