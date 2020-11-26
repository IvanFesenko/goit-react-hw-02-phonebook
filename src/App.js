import React, { Component } from 'react';
import { v4 as uid } from 'uuid';

import styles from './App.module.css';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  static defaultProps = {
    contacts: [],
    filter: '',
  };

  constructor(props) {
    super(props);
    this.state = { ...this.props };
    this.addContact = this.addContact.bind(this);
    this.filteredList = this.filteredList.bind(this);
    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  nameAvailable(newName) {
    const { contacts } = this.state;
    const index = contacts.findIndex(
      ({ name }) => name.toLowerCase() === newName.toLowerCase().trim(),
    );
    return index === -1 ? true : false;
  }

  addContact(name, number) {
    if (this.nameAvailable(name)) {
      const newContact = { id: uid(), name, number };
      this.setState({
        contacts: this.state.contacts.concat([newContact]),
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  }

  onChangeFilter(value) {
    this.setState({
      filter: value,
    });
  }

  onDeleteHandler(id) {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(i => i.id !== id),
    });
  }

  filteredList() {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  render() {
    const { filter, contacts } = this.state;
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        {contacts.length > 0 && <h2>Contacts</h2>}
        {contacts.length > 0 && (
          <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={filter ? this.filteredList() : contacts}
            onDeleteHandler={this.onDeleteHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
