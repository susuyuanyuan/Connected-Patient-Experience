from flask import Blueprint, jsonify, request
from fhirclient import client
import fhirclient.models.patient as p
from config import settings
from datetime import date, datetime
from flasgger.utils import swag_from

patient = Blueprint('patient',__name__)
smart = client.FHIRClient(settings=settings)


@patient.route("/fhir_patient/<patient_id>", methods=['GET'])
@swag_from('YML/test.yml')
def get_patient_by_id(patient_id):
    #patient_id = request.args.get('id')
    #patient_id = '494743a2-fea5-4827-8f02-c2b91e4a4c9e'
    patient = p.Patient.read(patient_id, smart.server)
    return get_patient_data(patient)

def get_patient_data(patient):
    patient_dict = {}
    if patient:
        # Patient data
        #patient_dict['id'] = patient.id
        [name, first, last] = get_patient_name(patient)       # name
        patient_dict['name'] = name
        patient_dict['firstname'] = first
        patient_dict['lastname'] = last
        patient_dict['gender'] = get_patient_gender(patient)
        patient_dict['date_of_birth'] = get_patient_birthday(patient)
        patient_dict['age'] = get_patient_age(patient)
        patient_dict['maritalstatus'] = get_patient_marital_status(patient)
        patient_dict['language'] = get_patient_language(patient)
        patient_dict['address'] = get_patient_address(patient)
        patient_dict['phone'] =get_patient_phone(patient)


    return jsonify(patient_dict)

def get_patient_name(patient):
    if patient.name:
        name = []
        first = ''
        last = ''
        if patient.name[0].given:
            first = patient.name[0].given[0]
            name.append(first)
        if patient.name[0].family:
            last = patient.name[0].family
            name.append(last)
        return [name, first, last]
    return ['', '' ,'']

def get_patient_address(patient):
    if patient.address:
        address = []
        addr = patient.address
        if addr:
            if addr[0].line:
                address.append(addr[0].line[0])
            if addr[0].city:
                address.append(addr[0].city)
            if addr[0].state:
                address.append(addr[0].state)
            if addr[0].country:
                address.append(addr[0].country)
            if address:
                return ', '.join(address)
        return ''

def get_patient_gender(patient):
    if patient.gender:
        return patient.gender
    return ''

def get_patient_birthday(patient):
    if patient.birthDate:
        return patient.birthDate.isostring
    return ''

def get_patient_age(patient):
    if patient.birthDate:
        today = date.today()
        birthdate = datetime.strptime(patient.birthDate.isostring, '%Y-%m-%d')
        return today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))

def get_patient_language(patient):
    if patient.language:
        return patient.language
    return ''

def get_patient_marital_status(patient):
    if patient.maritalStatus:
        return patient.maritalStatus.text
    return ''

def get_patient_phone(patient):
    if patient.telecom:
        phone = ''
        if patient.telecom[0].system == 'phone':
            phone = patient.telecom[0].value
        return phone
    return ''