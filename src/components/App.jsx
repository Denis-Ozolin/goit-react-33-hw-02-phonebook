import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(({ contacts }) => ({
      contacts: [
        {
          id: uuidv4(),
          name: this.state.name,
          number: this.state.number,
        },
        ...contacts,
      ],
    }));

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input onChange={this.handleChange} value={filter} type="text" name="filter" />
        </label>
        <ul>
          {contacts.length
            ? contacts.map(
                ({ id, name, number }) =>
                  name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) && (
                    <li key={id}>
                      {name}: {number}
                    </li>
                  ),
              )
            : null}
        </ul>
      </>
    );
  }
}
