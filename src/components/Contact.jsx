import React from "react";

function Contact(props) {
  const { contact } = props;
  return (
    <li className="card-contact">
      <div className="avatar-contact">
        <img src={contact.avatar} alt="Contact Avatar" />
      </div>
      <span className="data-contact">{contact.name}</span>
      <span className="data-contact">{contact.phone}</span>
      <span className="data-contact">{contact.country}</span>
      <span className="data-contact">{contact.admissionDate}</span>
      <span className="data-contact">{contact.company}</span>
      <span className="data-contact">{contact.department}</span>
    </li>
  );
}

export default Contact;
