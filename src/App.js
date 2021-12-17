import './App.css'
import { useState } from 'react'
import Section from './components/Section/Section'
import Container from './components/Container/Container'
import Form from './components/Form/Form'
import List from './components/List/List'
import UserFilter from './components/userFilter/UserFilter'
import { v4 } from 'uuid'
import useLocalStorage from './components/localStorage'

function App() {
  const [messages, setMessages] = useLocalStorage('messages', [])
  const [filter, setFilter] = useState('')

  const addMessage = (name, text) => {
    const message = {
      id: v4(),
      name,
      text,
    }
    setMessages((messages) => [message, ...messages])
  }
  const handleSubmit = ({ name, text }) => {
    // if (messages.find((user) => user.name === name)) {
    //   console.log('name in use')
    //   return
    // }
    addMessage(name, text)
  }
  const deleteMessage = (id) => {
    setMessages(messages.filter((mess) => mess.id !== id))
  }

  const filterChange = (filter) => setFilter(filter.toLowerCase())
  const visibleMessages = () => {
    return messages.filter((user) => user.name.toLowerCase().includes(filter))
  }
  console.log(messages)
  return (
    <div className="App">
      <Section title="Mini chat">
        <Form onSubmit={handleSubmit} />
        <UserFilter value={filter} onChange={filterChange} />
        <Container>
          <List messages={visibleMessages()} Dlt={deleteMessage} />
        </Container>
      </Section>
    </div>
  )
}

export default App
