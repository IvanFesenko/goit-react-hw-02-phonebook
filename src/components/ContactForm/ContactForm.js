import React, { Component } from 'react';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }

  handleChange(event, type) {
    this.setState({
      [type]: event.target.value,
    });
  }

  handleSubmit(event) {}

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
            type="number"
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
