import React, { useState, useEffect } from "react";

import "./App.scss";
import Contacts from "./components/Contacts";
import Topbar from "./components/Topbar";
import Filtres from "./components/Filters";

function App() {
  const [contactsAll, setContactsAll] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [filterText, setFilterText] = useState(""); // Search
  const [filterName, setFilterName] = useState("name"); // selected filter

  function handlefilters(filterName) {
    const sorterdContactsList = [...contactsAll];
    sorterdContactsList.sort((a, b) => {
      if (a[filterName] > b[filterName]) {
        return 1;
      } else if (b[filterName] > a[filterName]) {
        return -1;
      }
      return 0;
    });

    setFilterName(filterName);
    setContacts([...sorterdContactsList]);
  }

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
      <div className="app" data-testid="app">
        <Topbar />
        <Filtres
          filterText={filterText}
          setFilterText={setFilterText}
          orderContacts={handlefilters}
        />
        <Contacts
          contacts={contacts}
          filterText={filterText}
          filterName={filterName}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
