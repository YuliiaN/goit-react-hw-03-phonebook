import { Component } from 'react';
import Section from './Section/Section';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

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

  addName = ({ name, number }) => {
    const isRepeated = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isRepeated) {
      alert(`${isRepeated.name} is already in contacts`);
      return false;
    }

    const contact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    return true;
  };

  deleteName = id => {
    const newContacts = this.state.contacts.filter(item => item.id !== id);
    this.setState({
      contacts: [...newContacts],
    });
  };

  handleFilter = filter => {
    this.setState({
      filter,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const selectedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <Section title="Phonebook">
          <Form getValue={this.addName}></Form>
        </Section>
        <Section title="Contacts">
          {contacts.length ? (
            <>
              <Filter
                title="Find contacts by name"
                filterContacts={this.handleFilter}
              />
              <ContactsList
                findContact={selectedContacts}
                deleteContact={this.deleteName}
              />
            </>
          ) : (
            <p>Your phonebook is empty</p>
          )}
        </Section>
      </>
    );
  }
}
