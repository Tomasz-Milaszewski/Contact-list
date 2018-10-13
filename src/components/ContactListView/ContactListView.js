import React, { Component } from 'react'
import AddContact from '../AddContact/AddContact'
import Button from '../Button/Button'
import './ContactListView.css'

class ContactListView extends Component {

  state = {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
    previousState: null
  }

  removeContact = contactId => {
    this.setState({
      previousState: this.state,
      contacts: this.state.contacts.filter(
        contact => contactId !== contact.id
      )
    })
  }

  handleUndo = () => {
    this.setState(this.state.previousState)
  }

  addContact = (name, surname) => {
    this.setState({
      previousState: this.state,
      contacts: this.state.contacts.concat({
        id: Date.now(),
        name: name,
        surname: surname
      })
    })
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <AddContact addContactFunction={this.addContact} />
        <Button handleClick={this.handleUndo}>Undo</Button>
        <ul>
          {
            this.state.contacts.map(
              contact => (
                <li key={contact.id}>
                  {contact.name} {contact.surname}
                  <Button handleClick={() => this.removeContact(contact.id)}>Remove Contact</Button>
                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default ContactListView