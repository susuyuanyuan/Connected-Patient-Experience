from flask import Blueprint, jsonify, request
from fhirclient import client
import fhirclient.models.patient as p
import fhirclient.models.condition as cond
from config import settings
from datetime import date, datetime
from flasgger.utils import swag_from
import config as config

condition = Blueprint('condition',__name__)
smart = client.FHIRClient(settings=settings)

@condition.route("/fhir_conditions/<patient_id>", methods=['GET'])
@swag_from('YML/test.yml')
def get_medical_record(patient_id):
    result_dict = {}
    search = cond.Condition.where(struct={'subject': patient_id})
    results = search.perform_resources(smart.server)
    if len(results) > 0:
        counter = 1
        for result in results:
            single_condition = {}
            if result.code.coding[0].display:
                single_condition['condition'] = result.code.coding[0].display
            if result.clinicalStatus:
                single_condition['clinicalStatus'] = result.clinicalStatus
            if result.verificationStatus:
                single_condition['verificationStatus'] = result.verificationStatus
            if result.onsetDateTime:
                single_condition['time'] = result.onsetDateTime.isostring
            result_dict[counter] = single_condition
            counter += 1
    return result_dict
