# Test Plan

### Team Name

Team 10

### Team members

1. Xiaochu Lou, xlou34, xlou34@gatech.edu
2. Yian Chen, ychen855, ychen855@gatech.edu
3. Chih-Yuan Su, csu68, csu68@gatech.edu

### Project Name

Project #22: Connected Patient Experience




## 1 Testing Strategy

### 1.1 Overall strategy

We will design test cases for the each of our functions for bugs during the unit level development. Then we will use integration test to check the compatibility of each unit at the module level. Then we will do the integration test to check the compatibility of each module during the system testing level. We might also consider regression and cross testing depending on our time and energy.

### 1.2 Test Selection

The test will be performed at unit, integration, and system testing level.  The testing will evaluate the response of the application to a more various inputs and test the cross functionality of each component.


### 1.3 Adequacy Criterion

To assess the quality the tests, we can rely on our IDE's coverage tool. Each test will performed to analyze the partition and structural capability of the program. In addition, there will be testing of the user interface functionality. A stress test might also be considered to verify application stability and reliability.
The system test cases will be performed to ensure the matrix functionality.

### 1.4 Bug Tracking

Bugs will be tracked in Issues section in the github repository.

## 2 Test Cases

### 2.1 Unit Testing

| ID    |        Test Cases         |                     Purpose                     |
| ----- | :-----------------------: | :---------------------------------------------: |
| unit1 |        Login test         |            Test the login interface             |
| unit2 |    Select doctor test     |       Test the doctor selecting interface       |
| unit3 |      Messaging test       |      Test the security messaging interface      |
| unit4 |         FHIR test         |       Test the correct return of FHIR API       |
| unit5 | Prescription request test | Test the Prescription refills request interface |
| unit6 |   Medical history test    |   Test the Medical history request interface    |
| unit7 |       Contact test        |        Test the direct contact interface        |

### 2.2 System Testing

Once the unit testing finished, we will test the integration of functions at system level. The regression test might also be considered during this stage. This part of the plan is subjected to changes as we proceed forward with the development.