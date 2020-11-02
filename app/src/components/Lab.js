import React from 'react';
import ReactHover, { Trigger, Hover } from 'react-hover';
const Lab = () => {
    const optionsCursorTrueWithMargin = {
        followCursor: true,
        shiftX: 20,
        shiftY: 0
    }

    return (
        <div className="lab-container">
            <header className="header">
                Lab Results
            </header>
            <main className="main-lab">
                <div className="lab-tests">
                    <div className="lab-test">
                        <ReactHover options={optionsCursorTrueWithMargin}>
                            <Trigger type="trigger">
                                <button className="lab-test-button">Height</button>
                            </Trigger>
                            <Hover type="hover">
                                <p>Click to see Height.</p>
                            </Hover>
                        </ReactHover>
                    </div>
                    <div className="lab-test">
                        <ReactHover options={optionsCursorTrueWithMargin}>
                            <Trigger type="trigger">
                                <button className="lab-test-button">Weight</button>
                            </Trigger>
                            <Hover type="hover">
                                <p>Click to see Weight.</p>
                            </Hover>
                        </ReactHover>
                    </div>
                    <div className="lab-test">
                        <ReactHover options={optionsCursorTrueWithMargin}>
                            <Trigger type="trigger">
                                <button className="lab-test-button">BMI</button>
                            </Trigger>
                            <Hover type="hover">
                                <p>Click to see BMI.</p>
                            </Hover>
                        </ReactHover>
                    </div>
                    <div className="lab-test">
                        <ReactHover options={optionsCursorTrueWithMargin}>
                            <Trigger type="trigger">
                                <button className="lab-test-button">HDL</button>
                            </Trigger>
                            <Hover type="hover">
                                <p>Click to see HDL.</p>
                            </Hover>
                        </ReactHover>
                    </div>
                    <div className="lab-test">
                        <ReactHover options={optionsCursorTrueWithMargin}>
                            <Trigger type="trigger">
                                <button className="lab-test-button">LDL</button>
                            </Trigger>
                            <Hover type="hover">
                                <p>Click to see LDL.</p>
                            </Hover>
                        </ReactHover>
                    </div>
                    <div className="lab-test">
                        <ReactHover options={optionsCursorTrueWithMargin}>
                            <Trigger type="trigger">
                                <button className="lab-test-button">Blood Pressure</button>
                            </Trigger>
                            <Hover type="hover">
                                <p>Click to see Blood Pressure.</p>
                            </Hover>
                        </ReactHover>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Lab;