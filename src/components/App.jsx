import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    this.onCheckUniqueName(name)
      ? alert(`${name} is alredy in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [
            {
              id: uuidv4(),
              name,
              number,
            },
            ...contacts,
          ],
        }));
  };

  filterUpdateHandler = data => {
    this.setState({
      filter: data,
    });
  };

  onCheckUniqueName = value => {
    const { contacts } = this.state;

    return contacts.find(({ name }) => name === value);
  };

  filteredContactsHandler = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onGetValue={this.filterUpdateHandler} />
        {!filter ? (
          <ContactList contacts={contacts} onDelete={this.onDeleteContact} />
        ) : (
          <ContactList contacts={this.filteredContactsHandler()} onDelete={this.onDeleteContact} />
        )}
      </div>
    );
  }
}
