import React from 'react';

export const ContactList = ({ contacts, filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts(contacts).map(contact => (
        <li key={contact.id}>
          {`${contact.name}: ${contact.number}`}

          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
