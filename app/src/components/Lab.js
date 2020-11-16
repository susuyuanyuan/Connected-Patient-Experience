import React, { useState } from "react";
import ReactHover, { Trigger, Hover } from "react-hover";
import Header from "./Header";

const Lab = ({ history }) => {
  const [showHeight, setShowHeight] = useState(false);
  const [showWeight, setShowWeight] = useState(false);
  const [showBMI, setShowBMI] = useState(false);
  const [showHDL, setShowHDL] = useState(false);
  const [showLDL, setShowLDL] = useState(false);
  const [showBP, setShowBP] = useState(false);

  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
  };

  const lab = {
    height: 64,
    weight: 130,
    bmi: 22.3,
    hdl: 22,
    ldl: 22,
    bp: 80,
  };

  return (
    <div className="lab-container">
      <Header />
      <main className="main">
        <div className="main-grid">
          <div className="lab-test">
            <ReactHover options={optionsCursorTrueWithMargin}>
              <Trigger type="trigger">
                <button
                  className="display-button"
                  onClick={() => setShowHeight(!showHeight)}
                >
                  {showHeight ? lab.height + " inches" : "Height"}
                </button>
              </Trigger>
              <Hover type="hover">
                <p>Click to see Height.</p>
              </Hover>
            </ReactHover>
          </div>
          <div className="lab-test">
            <ReactHover options={optionsCursorTrueWithMargin}>
              <Trigger type="trigger">
                <button
                  className="display-button"
                  onClick={() => setShowWeight(!showWeight)}
                >
                  {showWeight ? lab.weight + " lbs" : "Weight"}
                </button>
              </Trigger>
              <Hover type="hover">
                <p>Click to see Weight.</p>
              </Hover>
            </ReactHover>
          </div>
          <div className="lab-test">
            <ReactHover options={optionsCursorTrueWithMargin}>
              <Trigger type="trigger">
                <button
                  className="display-button"
                  onClick={() => setShowBMI(!showBMI)}
                >
                  {showBMI ? lab.bmi : "BMI"}
                </button>
              </Trigger>
              <Hover type="hover">
                <p>Click to see BMI.</p>
              </Hover>
            </ReactHover>
          </div>
        </div>
        <div className="main-grid">
          <div className="lab-test">
            <ReactHover options={optionsCursorTrueWithMargin}>
              <Trigger type="trigger">
                <button
                  className="display-button"
                  onClick={() => setShowHDL(!showHDL)}
                >
                  {showHDL ? lab.hdl : "HDL"}
                </button>
              </Trigger>
              <Hover type="hover">
                <p>Click to see HDL.</p>
              </Hover>
            </ReactHover>
          </div>
          <div className="lab-test">
            <ReactHover options={optionsCursorTrueWithMargin}>
              <Trigger type="trigger">
                <button
                  className="display-button"
                  onClick={() => setShowLDL(!showLDL)}
                >
                  {showLDL ? lab.ldl : "LDL"}
                </button>
              </Trigger>
              <Hover type="hover">
                <p>Click to see LDL.</p>
              </Hover>
            </ReactHover>
          </div>
          <div className="lab-test">
            <ReactHover options={optionsCursorTrueWithMargin}>
              <Trigger type="trigger">
                <button
                  className="display-button"
                  onClick={() => setShowBP(!showBP)}
                >
                  {showBP ? lab.bp : "BP"}
                </button>
              </Trigger>
              <Hover type="hover">
                <p>Click to see Blood Pressure.</p>
              </Hover>
            </ReactHover>
          </div>
        </div>
        <button
          className="back-button ml-5 mt-5"
          onClick={() => {
            history.push("/");
          }}
        >
          Back to Menu
        </button>
      </main>
    </div>
  );
};

export default Lab;
