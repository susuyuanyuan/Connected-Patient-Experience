from flask import Flask, Response, redirect, url_for, jsonify, request
from flask_pymongo import PyMongo
import json
from MongoAPI import *
from flasgger import Swagger
from patient import *
from medication import *
from condition import *
from lab import *
import socket
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config[
    "MONGO_URI"] = "mongodb+srv://admin:admin@cluster0.yg6ml.mongodb.net/portal?retryWrites=true&w=majority"

hostname = socket.gethostname()
IPAddr = socket.gethostbyname(hostname)
app.config['SERVER_NAME'] = IPAddr + ":5000"
mongo = PyMongo(app)
swag = Swagger(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.register_blueprint(patient)
app.register_blueprint(medication)
app.register_blueprint(lab)
app.register_blueprint(condition)

#All the routings in our app will be mentioned here.


@app.route('/')
def base():
    return redirect(url_for('flasgger.apidocs'))


#Mongo API Section
@app.route('/mongodb', methods=['GET'])
@swag_from('YML/test.yml')
def mongo_read():
    data = request.json
    if data is None or data == {}:
        return Response(response=json.dumps(
            {"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = MongoAPI(data)
    response = obj1.read()
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')


@app.route('/mongodb', methods=['POST'])
def mongo_write():
    data = request.json
    if data is None or data == {} or 'Document' not in data:
        return Response(response=json.dumps(
            {"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = MongoAPI(data)
    response = obj1.write(data)
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')


@app.route('/mongodb', methods=['PUT'])
def mongo_update():
    data = request.json
    if data is None or data == {} or 'DataToBeUpdated' not in data:
        return Response(response=json.dumps(
            {"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = MongoAPI(data)
    response = obj1.update()
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')


@app.route('/mongodb', methods=['DELETE'])
def mongo_delete():
    data = request.json
    if data is None or data == {} or 'Filter' not in data:
        return Response(response=json.dumps(
            {"Error": "Please provide connection information"}),
                        status=400,
                        mimetype='application/json')
    obj1 = MongoAPI(data)
    response = obj1.delete(data)
    return Response(response=json.dumps(response),
                    status=200,
                    mimetype='application/json')


@app.route('/test')
def test():
    return "App is working perfectly"


@app.route('/star', methods=['GET'])
def get_all_patient():
    patient = mongo.db.patient
    output = []
    for s in patient.find():
        output.append({
            'First_name': s['First_name'],
            'Last_name': s['Last_name']
        })
    return jsonify({'result': output})


@app.route('/star/', methods=['GET'])
def get_one_patient(ID):
    patient = mongo.db.patient
    s = patient.find_one({'ID': ID})
    if s:
        output = {'First_name': s['First_name'], 'Last_name': s['Last_name']}
    else:
        output = "No such name"
    return jsonify({'result': output})


@app.route('/star', methods=['POST'])
def add_patient():
    patient = mongo.db.patient
    name = request.json['name']
    distance = request.json['distance']
    star_id = patient.insert({'name': name, 'distance': distance})
    new_star = patient.find_one({'_id': star_id})
    output = {'name': new_star['name'], 'distance': new_star['distance']}
    return jsonify({'result': output})


if __name__ == '__main__':
    app.run(debug=True)
