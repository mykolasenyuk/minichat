import { useState } from 'react'
import { v4 } from 'uuid'

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const nameInputId = v4()
  const textInputId = v4()

  const onInputChange = (e) => {
    const { name, value } = e.currentTarget

    switch (name) {
      case 'name':
        setName(value)
        break
      case 'message':
        setText(value)
        break

      default:
        break
    }
  }

  const submit = (e) => {
    e.preventDefault()
    onSubmit({ name, text })
    reset()
  }
  const reset = () => {
    setName('')
    setText('')
  }
  console.log(text)
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor={nameInputId}>
          <input
            placeholder="Name"
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов."
            required
            onChange={onInputChange}
          />
        </label>

        <label htmlFor={textInputId}>
          <input
            // className={s.formInput}
            placeholder="Message"
            id={textInputId}
            type="text"
            name="message"
            value={text}
            required
            onChange={onInputChange}
          />
        </label>
        <button type="submit">Add Message</button>
      </form>
    </div>
  )
}
export default Form
