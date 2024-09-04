"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
# una opcion es inicializar e importar sin nada en los parentesis (app)
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
# otra opcion es importar de app el bcrypt y jwt
# from app import bcrypt, jwt

api = Blueprint('api', __name__)

bcrypt = Bcrypt()
jwt = JWTManager()

# Allow CORS requests to this API
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

# Obtiene informacion de todos los usuarios
# @api.route('/users', methods=['GET'])
# def get_users():
#     try:
#         users_results = User.query.all()
#         # print(users_results)
#         results = list(map(lambda item: item.serialize(), users_results))
#         # print(results)
#         if results:
#             response_body = {
#                 "msg": "ok",
#                 "results": results
#             }
#             return jsonify(response_body), 200
#         return jsonify({'error': 'Users not found'}), 404
#     except Exception as e:
#         return jsonify({'error': 'Internal server error', 'message': str(e)}), 500

# Agregar un usuario nuevo
@api.route('/signup', methods=['POST'])
def signup_user():
    try:
        new_name = request.json.get('name')
        new_email = request.json.get('email')
        new_password = request.json.get('password')
        # print(new_name, new_email, new_password)
        if not new_name or not new_email or not new_password:
            return jsonify({'error': 'name, email, and password are required'}), 400
        existing_user = User.query.filter_by(email = new_email).first()
        if existing_user:
            return jsonify({'error': 'Email already exists. Please try another one'}), 409
        # encriptacion del paswword
        # objeto.propiedad/metodo(argumento).-ponemos en un formato de codigo q sea legible y guardable en la DB-
        # para que genere el password hasheado
        pass_hash = bcrypt.generate_password_hash(new_password).decode('utf-8')
        # propiedades ..valores q le pasamos, se crea con un id incremental q se genera automaticamente
        # Creacion de un nuevo usuario
        new_user = User(name=new_name, email=new_email, password=pass_hash)
        # pasarlo a la BD con una session copia de db y al hacer commit ya lo reemplaza
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully"}), 201
    except Exception as e:
        return jsonify({'error': 'Internal server error', 'message': str(e)}), 500

# Inicio de sesion de cada usuario con email y contraseña
@api.route('/login', methods=['POST'])
def login():
    try:
        email_user = request.json.get('email')
        pass_user = request.json.get('password')
        # print(email_user, pass_user)
        if not email_user or not pass_user:
            return jsonify({'error': 'Email and password are required'}), 400
        # Buscamos un usuario de la tabla User filtrando por email, si lo encuentra, lo captura en login user
        login_user = User.query.filter_by(email = email_user).one()
        if not login_user:
            return jsonify({'error': 'email not found'}), 404
        # Comparamos el password de la BD con el password ingresado con un metodo de bcrypt
        pass_hash_db = login_user.password
        result = bcrypt.check_password_hash(pass_hash_db, pass_user)
        if result:
            # tomamos el id del usuario logeado
            user_id = login_user.id
            # creamos el token con el id del usuario
            # Access_token me sirve para restringir la vista solo a usuarios logueados
            access_token = create_access_token(identity = user_id)
            return jsonify({'access_token': access_token, 'name':login_user.name, 'email':login_user.email}), 200
        else:
            return jsonify({'error': 'Incorrect password'}), 404
    except Exception as e:
        return jsonify({'error': 'Internal server error', 'message': str(e)}), 500

# Obtiene todos los usuarios desde un usuario logueado (Ruta restringida por token)
@api.route('/users') #/private
@jwt_required()
def get_users_token():
    try:
        #obteniendo el id del usuario del token
        get_user_id = get_jwt_identity()
        if get_user_id:
            users = User.query.all()
            # print(users)
            results = list(map(lambda item: item.serialize(), users))
            # print(results)
            return jsonify({"users_list": results, "Number_of_users": len(results)}), 200
        return jsonify({'error': 'Users not found'}), 404
    except Exception as e:
        return jsonify({'error': 'Invalid token', 'message': str(e)}), 401
