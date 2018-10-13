import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AddContact.css'
class AddContact extends Component {

  static propTypes = {
    /**
     * Function called during form submission 
     * 
     * @param {string} title text written in the form field
     */
    addContactFunction: PropTypes.func
  }

//   static defaultProps = {
//     addContactFunction: title => console.log(`Trying to add task with title: ${title} `)
//   }

  state = {
    contactName: '',
    contactSurname: '',
    error: null
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.contactName === '' || this.state.contactSurname === '') {
      this.setState({
        error: new Error('Sorry, we need name and surname to make it work')
      })
      return;
    }
    this.props.addContactFunction(this.state.contactName, this.state.contactSurname);
    this.setState({ contactName: '', contactSurname: '', error: null })
  }

  handleChangeName = event => {
    this.setState({
      contactName: event.target.value,
    })
  }
  handleChangeSurname = event => {
    this.setState({
      contactSurname: event.target.value,
    })
  }

  render() {
    return (
      <form className="AddContact" onSubmit={this.handleSubmit}>
        {
          this.state.error && <p>{this.state.error.message}</p>
        }
        <input value={this.state.contactName} onChange={this.handleChangeName}/>
        <input value={this.state.contactSurname} onChange={this.handleChangeSurname}/>
        <button>Add contact</button>
      </form>
    )
  }
}

export default AddContact