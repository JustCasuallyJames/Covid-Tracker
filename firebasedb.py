# from flask import Flask, request
# import json

# from firebase_admin import credentials, firestore
# import firebase_admin

# app = Flask(__name__, static_url_path='', static_folder='public')
# credential = credentials.Certificate("serviceAccountKey.json")
# firebase_admin.initialize_app(credential)
# db = firestore.client()

# # @app.route("/form", method=["POST"])
# # def addItems(): 
# #     db.collection("users").document(name).set({"symptoms": request.form["symptoms"] "notes": request.form.getList("notes")})

# @app.route("/test", methods=["POST"])
# def test():
#     return "xin chao go"

# @app.route("/login")
# def setUser():
#     print('works')
#     name = request.form["email"]
#     # just a dummy post
#     db.collection("emails").add(name)
#     return "Hello World"

# @app.route("/")
# def something():
#     return app.send_static_file("index.html")

# if __name__ == "__main__":
#     app.run(debug=True)



