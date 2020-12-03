from fhirclient import client
import fhirclient.models.patient as patient
import fhirclient.models.fhirsearch as fhirsearch
import fhirclient.models.condition as condition
import fhirclient.models.observation as observation

import random
import string

from pymongo import MongoClient
from bson.objectid import ObjectId

settings = {
    'app_id': 'connected_patient_experience',
    'api_base': 'https://launch.smarthealthit.org/v/r3/fhir',
    'launch': "eyJhIjoiMSIsImciOiIxIn0",
}

smart = client.FHIRClient(settings=settings)
smart.prepare()


def get_medical_records(patient_id):
    results_out = []
    search = condition.Condition.where(struct={'subject': patient_id})
    results = search.perform_resources(smart.server)

    for result in results:
        this_condition = {"_id": ObjectId()}
        if result.code.coding[0].display:
            this_condition['conditionName'] = result.code.coding[0].display
        if result.clinicalStatus:
            this_condition['clinicalStatus'] = result.clinicalStatus
        if result.verificationStatus:
            this_condition['verificationStatus'] = result.verificationStatus
        if result.onsetDateTime:
            this_condition['recordedDate'] = result.onsetDateTime.isostring
        if result.note:
            this_condition['note'] = result.note
        results_out.append(this_condition)

    return results_out


lab_config = {
    '8302-2': 'height',
    '29463-7': 'weight',
    '39156-5': 'BMI',
    '2085-9': 'HDL',
    '2089-1': 'LDL',
    '8480-6': 'BP'
}

value_range = {
    'height': [160, 200],
    'weight': [40, 100],
    'BMI': [30, 60],
    'HDL': [30, 70],
    'LDL': [20, 210],
    'BP': [70, 120],
}


def get_lab_results(patient_id):
    result_dict = {"_id": ObjectId()}
    query_json = {'subject': patient_id, '_sort': '-date', '_count': '1'}
    for code, name in lab_config.items():
        if name == "BP":
            query_json["component-code"] = code
        else:
            query_json["code"] = code
        search = observation.Observation.where(query_json)
        results = search.perform_resources(smart.server)
        if len(results) == 0:
            result_dict[name] = random.randint(value_range[name][0],
                                               value_range[name][1])
            continue
        if name == "BP":
            result_dict[name] = results[0].component[0].valueQuantity.value
        else:
            result_dict[name] = round(results[0].valueQuantity.value)

    return result_dict


patients = fhirsearch.FHIRSearch(patient.Patient).perform_resources(
    smart.server)


def get_random_string(length):
    letters = string.ascii_letters + string.digits
    return ''.join(random.choice(letters) for i in range(length))


doctor_choices = ["Chih-Yuan Su", "Xiaochu Lou", "Yian Chen"]
mongoUrl = "mongodb://localhost:27017"
# mongoUrl =
# "mongodb+srv://group-project:Ka6V91u9Bm9g2Doo@cluster0.bf6rf.mongodb.net/patients?retryWrites=true&w=majority"

mongo_client = MongoClient(mongoUrl)
patient_db = mongo_client["patients"]
patient_collection = patient_db["patients"]
patient_db.drop_collection(patient_collection)

out_patient = []
admin_added = False
for patient in patients:
    name = patient.name[0].as_json()
    patient_json = {
        "name": name["family"] + " " + " ".join(name["given"]),
        "username": name["family"].lower() + "".join(name["given"]).lower(),
        "password": get_random_string(8),
        "sex": "M" if patient.gender == "male" else "F",
        "doctorName": random.choice(doctor_choices),
        "phone": patient.telecom[0].as_json()["value"],
        "medicalRecords": get_medical_records(patient.id),
        "labResults": [get_lab_results(patient.id)]
    }
    if not admin_added:
        patient_json["name"] = "admin"
        patient_json["username"] = "admin"
        patient_json["password"] = "admin"
        admin_added = True
    patient_collection.insert_one(patient_json)
    print("Inserted: ", patient_json)
