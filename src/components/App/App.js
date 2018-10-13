import React, { Component } from 'react';
import ContactListView from '../ContactListView/ContactListView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactListView />
      </div>
    );
  }
}

export default App;
