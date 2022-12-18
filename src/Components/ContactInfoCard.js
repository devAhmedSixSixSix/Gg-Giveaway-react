import React from "react";

function ContactInfoCard({ icon, text }) {
  return (
    <div className="d-flex align-items-center justify-content-center mb-3">
      <span className="d-block m-0 me-3">{icon}</span>
      <h6 className="m-0">{text}</h6>
    </div>
  );
}

export default ContactInfoCard;
