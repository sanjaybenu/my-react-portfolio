import React, { useState } from "react";
import "./style.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number");
      return;
    }

    setSubmitted(true);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      {submitted ? (
        <p>Information submitted successfully!</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
