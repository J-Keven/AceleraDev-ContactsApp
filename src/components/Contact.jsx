import React from "react";

function Contact(props) {
  const { data } = props;
  const [year, month, day] = data.admissionDate.split("-");

  return (
    <article className="contact" data-testid="contact">
      <div className="contact__avatar">
        <img src={data.avatar} alt="Contact Avatar" />
      </div>
      <span className="contact__data" data-testid="contact-name">
        {data.name}
      </span>
      <span className="contact__data" data-testid="contact-phone">
        {data.phone}
      </span>
      <span className="contact__data" data-testid="contact-country">
        {data.country}
      </span>
      <span className="contact__data" data-testid="contact-date">
        {day.split("T")[0] + "/" + month + "/" + year}
      </span>
      <span className="contact__data" data-testid="contact-company">
        {data.company}
      </span>
      <span className="contact__data" data-testid="contact-department">
        {data.department}
      </span>
    </article>
  );
}

export default Contact;
