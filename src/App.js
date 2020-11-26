import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  static defaultProps = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  addContact(name, number) {}

  constructor(props) {
    super(props);
    this.state = { ...this.props };
    this.addContact = this.addContact.bind(this);
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
