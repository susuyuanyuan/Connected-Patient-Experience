import React, { useState, useEffect } from "react";
import ReactHover, { Trigger, Hover } from "react-hover";
import Header from "./Header";
import { useAuth } from "./Auth";

const Lab = ({ history }) => {
  const [showHeight, setShowHeight] = useState(false);
  const [showWeight, setShowWeight] = useState(false);
  const [showBMI, setShowBMI] = useState(false);
  const [showHDL, setShowHDL] = useState(false);
  const [showLDL, setShowLDL] = useState(false);
  const [showBP, setShowBP] = useState(false);

  const user = useAuth().user;

  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 20,
    shiftY: 0,
  };

  useEffect(() => {
    if (
      !user ||
      !user.labResults ||
      user.labResults.length === 0 ||
      !user.labResults[0]
    ) {
      history.push("/");
    }
  }, [user, history]);

  const labResult = user.labResults[0];

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
                  {showHeight ? labResult.height + " cm" : "Height"}
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
                  {showWeight ? labResult.weight + " kg" : "Weight"}
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
                  {showBMI
                    ? Math.round(
                        labResult.weight /
                          (labResult.height * labResult.height * 1e-4)
                      )
                    : "BMI"}
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
                  {showHDL ? labResult.HDL : "HDL"}
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
                  {showLDL ? labResult.LDL : "LDL"}
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
                  {showBP ? labResult.BP : "BP"}
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
            history.push("/home");
          }}
        >
          Back to Menu
        </button>
      </main>
    </div>
  );
};

export default Lab;
