# import firebase_admin
# from firebase_admin import credentials
# from firebase_admin import firestore


# from flask import Flask,request
# app = Flask(__name__)

# @app.route('/login', methods=["GET","POST"])
# def hello_world():
#     if request.method == 'POST': 
#         request.form['email']
#         return "inside if statement"
#     else:
#       return render_template('index.html')

# # Use a service account
# cred = credentials.Certificate('serviceAccountKey.json')
# firebase_admin.initialize_app(cred)

# db = firestore.client()

# doc_ref = db.collection(u'users').document(u'alovelace')
# doc_ref.set({
#     u'first': u'Ada',
#     u'last': u'Lovelace',
#     u'born': 1815
# })
  
# app.run(debug=True)
