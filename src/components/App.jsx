import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.scss';
import testData from './Data/testData.json';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [...testData],
    filter: '',
  };

  createNewContact = (name, number) => {
    const isExist = this.state.contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prev => ({
      contacts: [{ id: nanoid(), name, number }, ...prev.contacts],
    }));
  };

  handleChangeFilter = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };

  filteredContacts = contacts => {
    const { filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          createNewContact={this.createNewContact}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChangeFilter} />
        <ContactList
          contacts={contacts}
          filteredContacts={this.filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
