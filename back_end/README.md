step 1. run   pip install -r requirements.txt

step 2. run   app.py

step 3. open browser or make api call: 

Patient:    http://192.168.56.1:5000/fhir_patient/2782421

Labs:       http://192.168.56.1:5000/fhir_labs/2782421

diseases:   http://192.168.56.1:5000/fhir_conditions/2782421

medication: http://192.168.56.1:5000/fhir_meds/2782421

MongoDB: http://192.168.56.1:5000/mongodb  has methods=['GET'] ['POST']  ['PUT']  ['DELETE']

or go to http://192.168.56.1:5000/apidocs/    to check apis