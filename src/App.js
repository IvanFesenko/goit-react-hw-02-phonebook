import React, { Component } from 'react';
import { v4 as uid } from 'uuid';

import styles from './App.module.css';

import Contacts from './components/Contacts/Contacts';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  static defaultProps = {
    contacts: [
      {
        id: 'a866a652-a778-430b-ac26-097c344f60bb',
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      {
        id: '652c9ba6-6414-4c7b-b4d7-f21cb252ebaa',
        name: 'Hermione Kline',
        number: '443-89-12',
      },
      {
        id: '401c6a70-fd2a-4517-a1f0-c9d6750606cc',
        name: 'Eden Clements',
        number: '645-17-79',
      },
      {
        id: '7f5ebc82-d7f0-49cd-8707-a004ff49c237',
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ],
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
      const { contacts } = this.state;
      const newContact = { id: uid(), name, number };
      this.setState({
        contacts: contacts.concat([newContact]).sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name < b.name) return 1;
          return 1;
        }),
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
        {contacts.length > 0 ? (
          <Contacts>
            <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
            <ContactList
              contacts={filter ? this.filteredList() : contacts}
              onDeleteHandler={this.onDeleteHandler}
            />
          </Contacts>
        ) : (
          <p>Your phonebook is empty at this moment</p>
        )}
      </div>
    );
  }
}

export default App;
