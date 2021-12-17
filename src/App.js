import './App.css'
import { useState } from 'react'
import Section from './components/Section'
import Form from './components/Form'
import List from './components/list'
import { v4 } from 'uuid'
import useLocalStorage from './components/localStorage'

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [])
  const [filter, setFilter] = useState('')

  const addContact = (name, text) => {
    const contact = {
      id: v4(),
      name,
      text,
    }
    setContacts((contacts) => [contact, ...contacts])
  }
  const handleSubmit = ({ name, text }) => {
    addContact(name, text)
  }
  const deleteContact = (id) => {
    setContacts(contacts.filter((cont) => cont.id !== id))
  }

  return (
    <div className="App">
      <Section title="Mini chat">
        <Form onSubmit={handleSubmit} />
        <List contacts={contacts} Dlt={deleteContact} />
      </Section>
    </div>
  )
}

export default App
