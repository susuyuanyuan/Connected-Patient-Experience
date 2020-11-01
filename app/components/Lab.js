import React from 'react';

const Lab = () => {
    return (
        <div className="container">
            <header className="header">
                Lab Results
            </header>
            <main className="main-lab">
                <div className="lab-test">
                    <h3>Height:&nbsp;</h3>
                    <p>5.4 feet</p>
                </div>
                <div className="lab-test">
                    <h3>Weight:&nbsp;</h3>
                    <p>120 pounds</p>
                </div>
                <div className="lab-test">
                    <h3>BMI:&nbsp;</h3>
                    <p>20.6</p>
                </div>
                <div className="lab-test">
                    <h3>HDL:&nbsp;</h3>
                    <p>60 mg/dL</p>
                </div>
                <div className="lab-test">
                    <h3>LDL:&nbsp;</h3>
                    <p>40 mg/dL</p>
                </div>
                <div className="lab-test">
                    <h3>Blood Pressure:&nbsp;</h3>
                    <p>100 mmHg / 80 mmHg</p>
                </div>
            </main>
        </div>
    );
}

export default Lab;