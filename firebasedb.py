from flask import Flask, request
import json

from firebase_admin import credentials, firestore

app = Flask(__name__, static_url_path='/src/', static_folder='component')
db = firestore.client()
credential = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(credential)

@app.route("/login", method=['POST'])
def setUser():
    print('works')
    global name
    name = request.form["email"]
    #just a dummy post
    db.collection("emails").add(name)


@app.route("/form", method=["POST"])
def addItems(): 
    db.collection("users").document(name).set({"symptoms": request.form["symptoms"] "notes": request.form.getList("notes")})

