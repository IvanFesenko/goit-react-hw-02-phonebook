import React, { Component } from 'react';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    this.setState({
      [type]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor="formName">
          Name
          <input
            required
            id="formName"
            type="text"
            name="name"
            value={this.state.name}
            onChange={event => this.handleChange(event, 'name')}
          />
        </label>
        <label htmlFor="formNumber">
          Number
          <input
            id="formNumber"
            type="tel"
            name="number"
            value={this.state.number}
            required
            onChange={event => this.handleChange(event, 'number')}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
