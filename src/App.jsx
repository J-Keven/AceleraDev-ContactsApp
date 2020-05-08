import React, { useState, useEffect } from "react";

import "./App.scss";
import Contacts from "./components/Contacts";
import Topbar from "./components/Topbar";
import Filtres from "./components/Filters";

function App() {
  const [contacts, setContacts] = useState([]);
  const [nameContact, setNameContact] = useState("");
  const [filter, setfilter] = useState("name");

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
      <Topbar />
      <Filtres />
      <Contacts />

      <section className="contact-list"></section>
    </React.Fragment>
  );
}

export default App;
