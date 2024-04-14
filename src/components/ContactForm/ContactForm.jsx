import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    const { createNewContact } = this.props;
    e.preventDefault();
    const { name, number } = this.state;
    createNewContact(name, number);
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Name</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
