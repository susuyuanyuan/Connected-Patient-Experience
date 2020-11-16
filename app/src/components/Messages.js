import React, { useState } from "react";
import Header from "./Header";

const Messages = ({ history }) => {
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);

  const isValid = title !== null && message !== null;
  return (
    <div className="section-container">
      <Header />
      <main className="main">
        <form
          onSubmit={() => {
            history.push("/");
          }}
        >
          <div>Subject:</div>
          <div>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>Message:</div>
          <div>
            <input
              type="text"
              className="message"
              size="100"
              placeholder="type message here"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="back-button mt-5">
              Back to Menu
            </button>
            <button
              type="submit"
              className={isValid ? "back-button mt-5" : "disabled-button mt-5"}
            >
              Send to Primary Doctor
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Messages;
