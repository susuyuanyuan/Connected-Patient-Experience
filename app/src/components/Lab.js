import React from 'react';
import ReactHover, { Trigger, Hover } from 'react-hover';
const Lab = () => {
    const optionsCursorTrueWithMargin = {
        followCursor: true,
        shiftX: 20,
        shiftY: 0
    }
    const labs = ["Height", "Weight", "BMI", "HDL", "LDL", "Blood Pressure"]
    return (
        <div className="lab-container">
            <header className="header">
                Lab Results
            </header>
            <main className="main-lab">
                <div className="lab-tests">
                    {labs.map(lab => {
                        return (
                            <div className="lab-test">
                                <ReactHover options={optionsCursorTrueWithMargin}>
                                    <Trigger type="trigger">
                                        <button className="lab-test-button">{lab}:</button>
                                    </Trigger>
                                    <Hover type="hover">
                                        <p>Click to see results.</p>
                                    </Hover>
                                </ReactHover>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

export default Lab;