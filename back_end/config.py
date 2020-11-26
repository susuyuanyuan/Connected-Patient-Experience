from dotenv import load_dotenv

load_dotenv()

settings = {
    'app_id': 'connected_patient_experience',
    'api_base': 'http://hapi.fhir.org/baseDstu3',
    'patient_id': 2782421
}


loinc_code = ['8462-4', '8480-6', '2085-9', '2089-1', '55284-4','3141-9', '3137-7', '29463-7', '8302-2', '39156-5']


lab_config = {
    '8302-2': 'height',
    '29463-7': 'weight',
    '39156-5': 'bmi',
    '2085-9': 'hdl',
    '2089-1': 'ldl',
}

lab_blood_pressure_config = {
    '8480-6': 'diastolicbp',
    '8462-4': 'systolicbp'
}