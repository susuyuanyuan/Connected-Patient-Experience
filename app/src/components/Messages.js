import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useAuth } from "./Auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMessage } from "./action";
import { parseISO, formatDistanceToNow } from "date-fns";

const Messages = () => {
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);
  const auth = useAuth();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.user) {
      history.push("/");
    }
  }, [auth, history]);

  if (!auth.user) {
    return null;
  }

  const isValid = title && message;

  const handleSubmit = () => {
    if (title && message) {
      dispatch(addMessage(title, message, history));
    } else {
      window.alert("Please input subject and content of your message");
    }
  };

  const messages = auth.user.messages;

  return (
    <div className="section-container">
      <Header />
      <main className="main">
        <form>
          <div>Subject:</div>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>Message:</div>
          <div>
            <input
              type="text"
              className="message"
              size="100"
              placeholder="type message here"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              type="button"
              className="back-button mt-5"
              onClick={(e) => {
                history.push("/home");
              }}
            >
              Back to Menu
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              active={isValid}
              className={isValid ? "back-button mt-5" : "disabled-button mt-5"}
            >
              Send to Primary Doctor
            </button>
          </div>
        </form>
      </main>
      <label>Message History</label>
      {messages.map((message) => {
        return (
          <article className="post-excerpt" key={message._id}>
            <h3>{message.subject}</h3>
            <span title={message.date}>
              &nbsp; <i>{formatDistanceToNow(parseISO(message.date))} ago</i>
            </span>
            <p>{message.content}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Messages;
