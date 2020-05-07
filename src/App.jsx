import React, { useState, useEffect } from "react";

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";

import "./App.scss";
import Contacts from "./components/Contacts";

function App() {
  const [contacts, setContacts] = useState([]);
  const [nameContact, setNameContact] = useState("");

  async function handleRequestApi() {
    const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";
    const response = await fetch(url);
    const data = await response.json();
    setContacts(data);
  }

  useEffect(() => {
    handleRequestApi();
  }, []);

  console.log(nameContact);
  return (
    <React.Fragment>
      <header className="topbar">
        <div className="container">
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Logo Instagram" />
          </a>
        </div>
      </header>

      <div className="container">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={nameContact}
              onChange={(e) => setNameContact(e.target.value)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button className="filters__item is-selected">
            Nome <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            País <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button className="filters__item">
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>

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
        </section>
      </div>

      <section className="contact-list">
        <Contacts contactsList={contacts} nameContac={nameContact} />
      </section>
    </React.Fragment>
  );
}

export default App;
