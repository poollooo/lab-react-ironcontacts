import "./App.css";
import "./index.css";
import React, { useState } from "react";
import contact from "./contacts.json";
import Table from "./compoments/Table";

function App() {
  const [contacts, setContacts] = useState(contact.slice(0, 5));

  return (
    <div className="App">
      <p>IronContacts</p>
      <Table contacts={contacts} />
    </div>
  );
}

export default App;
