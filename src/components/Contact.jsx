import React from "react";

function Contact(props) {
  const { contact } = props;
  const [year, month, day] = contact.admissionDate.split("-");

  return (
    <article className="contact">
      <div className="contact__avatar">
        <img src={contact.avatar} alt="Contact Avatar" />
      </div>
      <span className="contact__data">{contact.name}</span>
      <span className="contact__data">{contact.phone}</span>
      <span className="contact__data">{contact.country}</span>
      <span className="contact__data">
        {day.split("T")[0] + "/" + month + "/" + year}
      </span>
      <span className="contact__data">{contact.company}</span>
      <span className="contact__data">{contact.department}</span>
    </article>
  );
}

export default Contact;
