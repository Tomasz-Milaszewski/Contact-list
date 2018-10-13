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
        <h1>Add Contact</h1>
        <AddContact addContactFunction={this.addContact} />
        <h1>Contact List</h1>
        <ul>
          {
            this.state.contacts.map(
              contact => (
                <li key={contact.id} className="ContactListView-list-item-li">
                  <p className="ContactListView-list-item-name">{contact.name} {contact.surname}</p>
                  <Button handleClick={() => this.removeContact(contact.id)}>Remove</Button>
                </li>
              )
            )
          }
        </ul>
        <Button handleClick={this.handleUndo} className="ContactListView-undo-button">Undo</Button>
      </div>
    )
  }
}

export default ContactListView