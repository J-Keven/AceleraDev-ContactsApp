import React from "react";
import Contact from "./Contact";

function Contacts(props) {
  const { contacts } = props;
  const { filterText } = props;
  const { filterName } = props;

  console.log(filterName);
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

        {contacts.map((item) => {
          return <Contact contact={item} />;
        })}
      </section>
    </div>
  );
}

export default Contacts;
// {contacts.map((item) => {
//   return <Contact contact={item} />;
// })}
