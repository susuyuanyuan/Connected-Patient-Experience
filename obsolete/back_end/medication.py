from flask import Blueprint, jsonify, request
from fhirclient import client
import fhirclient.models.patient as p
import fhirclient.models.medicationrequest as med
from config import settings
from datetime import date, datetime
from flasgger.utils import swag_from


medication = Blueprint('medication',__name__)
smart = client.FHIRClient(settings=settings)

@medication.route("/fhir_meds/<patient_id>", methods=['GET'])
@swag_from('YML/test.yml')
def get_med_request_data(patient_id):
    search = med.MedicationRequest.where(struct={'subject': patient_id
                                                , 'status': 'active'
                                                 ,'_sort': '-date'})
    med_requests = search.perform_resources(smart.server)
    med_dict = {}
    med_list = []
    for result in med_requests:
        if result.medicationCodeableConcept:
            med_list.append(result.medicationCodeableConcept.text)
    med_dict['prescription'] = med_list
    return med_dict

