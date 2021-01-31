import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

credential = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(credential)

db = firestore.client()

