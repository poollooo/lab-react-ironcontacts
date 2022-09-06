import "./App.css";
import "./index.css";
import React, { useState } from "react";
import contacts from "./contacts.json";
import Table from "./components/Table";
import Button from "./components/Button";

function App() {
  const fiveContacts = contacts.slice(0, 5);
  const [stateContact, setStateContact] = useState(fiveContacts);

  const buttonHandlerGetRandom = () => {
    let index = Math.floor(Math.random() * (contacts.length + 1));
    setStateContact((prevState) => {
      return [...prevState, contacts[index]];
    });
  };

  const buttonHandlerSortByName = () => {
    setStateContact((prevState) => {
      return [...prevState].sort((a, b) => a.name.localeCompare(b.name));
    })
  }

  const buttonHandlerSortByPopularity = () => {
    setStateContact((prevState) => {
      return [...prevState].sort((a, b) => b.popularity - a.popularity);
    })
  }


  return (
    <div className="App">
      <p>IronContacts</p>
      <Button onClick={buttonHandlerGetRandom} children="Add random contact" />
      <Button onClick={buttonHandlerSortByName} children="Sort by name" />
      <Button onClick={buttonHandlerSortByPopularity} children="Sort by popularity" />
      <Table contacts={stateContact} />
    </div>
  );
}

export default App;
