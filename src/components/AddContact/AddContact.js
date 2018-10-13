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
                <div className="AddContact-form-line">
                    <label className="AddContact-label" for="name">Name:</label>
                    <input className="AddContact-input" id="name" value={this.state.contactName} onChange={this.handleChangeName} />
                </div>
                <div className="AddContact-form-line">
                    <label className="AddContact-label" for="surname">Surname:</label>
                    <input className="AddContact-input" id="surname" value={this.state.contactSurname} onChange={this.handleChangeSurname} />
                    <button className="AddContact-button">Add</button>
                </div>
            </form>
        )
    }
}

export default AddContact