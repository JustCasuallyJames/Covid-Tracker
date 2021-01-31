from flask import Flask, request
import json

from firebase_admin import credentials, firestore

app = Flask(__name__)
db = firestore.client()
credential = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(credential)

@app.route("/username", method=['POST'])
def setUser():
    print('works')
    global name
    name = request.form["email"]
    #just a dummy post
    db.collection("emails").add(name)


@app.route("/add", method=["POST"])
def addItems(): 
    db.collection("users").document(name).set({"symptoms": request.form["symptoms"] "notes": request.form.getList("notes")})

