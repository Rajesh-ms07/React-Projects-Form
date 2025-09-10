import React, { useState } from "react";
import "./App.css"; 
export default function Form() {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  // To toggle sections
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubmitted(true);
  };
  

  return (
    <div>
      {!submitted && (
        <div className="container" id="formsection">
          <form onSubmit={handleSubmit}>
            <h1>Registration form</h1>
            <input
              type="text"
              placeholder="enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <textarea
              rows="4"
              placeholder="enter your feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {submitted && (
        <div className="container" id="displaysection">
          <h1>Thank you</h1>
          <p>Your details submitted successfully</p>
          <p>
            <strong>Name :</strong> <span>{name}</span>
          </p>
          <p>
            <strong>Email :</strong> <span>{email}</span>
          </p>
          <p>
            <strong>Password :</strong> <span>{password}</span>
          </p>
          <p>
            <strong>Feedback :</strong> <span>{feedback}</span>
          </p>
        </div>
      )}
    </div>
  );
}
