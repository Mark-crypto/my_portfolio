import React from "react";

const Contact = () => {
  return (
    <>
      <h4 className="title">Contact Me</h4>
      <div className="contact">
        <div className="contact1">
          <a href="https://www.linkedin.com/in/mark-abongo" target="_blank">
            <button>LinkedIn</button>
          </a>
          <a href="mailto:abongomark04@gmail.com" target="_blank">
            <button>Email Address</button>
          </a>
        </div>
        <div className="contact2">
          <a
            href="https://twitter.com/mark_iconic?t=-37GmmmWWWRrgxitQ2-EOg&s=09"
            target="_blank"
          >
            <button>Twitter</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
