import React from "react";

function Contact(props) {
  const { data } = props;
  const [year, month, day] = data.admissionDate.split("-");

  return (
    <article className="contact" data-testid="contact">
      <div className="contact__avatar">
        <img src={data.avatar} alt="Contact Avatar" />
      </div>
      <span className="contact__data">{data.name}</span>
      <span className="contact__data">{data.phone}</span>
      <span className="contact__data">{data.country}</span>
      <span className="contact__data">
        {day.split("T")[0] + "/" + month + "/" + year}
      </span>
      <span className="contact__data">{data.company}</span>
      <span className="contact__data">{data.department}</span>
    </article>
  );
}

export default Contact;
