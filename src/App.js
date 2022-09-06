import './App.css';
import './index.css'
import React, { useState } from 'react'
import contact from './contacts.json';



function App() {
  const [contacts, setContacts] = useState(contact.slice(0, 5));

  return (
    <div className="App">
    <p>IronContacts</p>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Rating</th>
        </tr>
          {contacts.map((contact) => {
          return (
            <tr>
              <td className="image" colspan="1">
                <img src={contact.pictureUrl} alt="contact" />
              </td>
              <td colspan="2">
                <h3>{contact.name}</h3>
              </td>
              <td colspan="3">
                  <p>{Math.floor(contact.popularity)}</p>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
