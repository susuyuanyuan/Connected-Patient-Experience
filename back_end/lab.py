from flask import Blueprint, jsonify, request
from fhirclient import client
import fhirclient.models.patient as p
import fhirclient.models.observation as obs
from config import settings
from datetime import date, datetime
from flasgger.utils import swag_from
import config as config

lab = Blueprint('lab',__name__)
smart = client.FHIRClient(settings=settings)

@lab.route("/fhir_labs/<patient_id>", methods=['GET'])
@swag_from('YML/test.yml')
def get_lab_data(patient_id):
    result_dict = {}
    for loinc in config.loinc_code:
        search = obs.Observation.where(struct={'subject': patient_id,
                                               'code': loinc,
                                               '_sort': '-date',
                                               '_count': '1'})
        results = search.perform_resources(smart.server)
        if len(results) > 0:
            try:
                result_dict[loinc] = str(round(results[0].valueQuantity.value,2)) + ' '+ results[0].valueQuantity.unit
            except:
                pass

    #blood pressure

    for loinc in config.lab_blood_pressure_config:
        search = obs.Observation.where(struct={'subject': patient_id,
                                               'component-code': loinc,
                                               '_sort': '-date',
                                               '_count': '1'})
        results = search.perform_resources(smart.server)
        if len(results) > 0:
            result_dict[config.lab_blood_pressure_config[loinc]] = str(round(results[0].component[0].valueQuantity.value,2)) + ' ' + \
                                                                             results[0].component[0].valueQuantity.unit

    return result_dict
