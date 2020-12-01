import React, { useState, useEffect } from "react";
import Header from "./Header";
import { AddMessage } from "../client/client";
import { useAuth } from "./Auth";

const Messages = ({ history }) => {
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) {
      history.push("/home");
    }
  }, [auth, history]);

  const isValid = title !== null && message !== null;
  return (
    <div className="section-container">
      <Header />
      <main className="main">
        <form
          onSubmit={() => {
            if (title && message) {
              AddMessage(auth.user, { subject: title, content: message });
              history.push("/");
            } else {
              window.alert("Please input subject and content of your message");
            }
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
