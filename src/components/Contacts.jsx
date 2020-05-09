import React from "react";
import Contact from "./Contact";

function Contacts(props) {
  const { contacts } = props;
  const { filterText } = props;
  const { filterName } = props;

  function handleSubString(string = "", SubString = "") {
    if (filterName === "admissionDate") {
      const [year, month, day] = string.split("-");
      const date = day.split("T")[0] + "/" + month + "/" + year;
      return date.substr(0, SubString.length) === SubString;
    }

    return string.substr(0, SubString.length) === SubString;
  }

  return (
    <div className="container">
      <section className="contacts">
        <article className="contact">
          <span className="contact__avatar" />
          <span className="contact__data">Nome</span>
          <span className="contact__data">Telefone</span>
          <span className="contact__data">País</span>
          <span className="contact__data">Admissão</span>
          <span className="contact__data">Empresa</span>
          <span className="contact__data">Departamento</span>
        </article>

        {contacts
          .filter((item) => handleSubString(item[filterName], filterText))
          .map((item) => (
            <Contact data={item} />
          ))}
      </section>
    </div>
  );
}

export default Contacts;
