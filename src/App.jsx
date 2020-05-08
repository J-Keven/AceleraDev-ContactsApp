import React, { useState, useEffect } from "react";

import "./App.scss";
import Contacts from "./components/Contacts";
import Topbar from "./components/Topbar";
import Filtres from "./components/Filters";

function App() {
  const [contactsAll, setContactsAll] = useState([]);
  const [contacts, setContacts] = useState([]); // selecionado
  const [filterText, setfilterText] = useState(""); // filter search
  const [filterName, setFilterName] = useState("nome");

  function handlefilters(filterName) {
    const test = [...contactsAll];
    test.sort((a, b) => {
      if (a[filterName] > b[filterName]) {
        return 1;
      } else if (b[filterName] > a[filterName]) {
        return -1;
      }
      return 0;
    });
    setFilterName(filterName);
    setContacts([...test]);
  }
  console.log(filterText);
  useEffect(() => {
    async function handleRequestApi() {
      const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";
      const response = await fetch(url);
      const data = await response.json();
      setContactsAll(data);
      setContacts(data);
    }
    handleRequestApi();
  }, []);

  return (
    <React.Fragment>
      <Topbar />
      <Filtres
        filterText={filterText}
        setfilterText={setfilterText}
        orderContacts={handlefilters}
      />
      <Contacts
        contacts={contacts}
        filterText={filterText}
        filterName={filterName}
      />
    </React.Fragment>
  );
}

export default App;
