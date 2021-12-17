const List = ({ contacts, Dlt }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <p>
            {contact.name} : <span>{contact.text}</span>
          </p>
          <button type="button" onClick={() => Dlt(contact.id)}>
            Dlt msg
          </button>
        </li>
      ))}
    </ul>
  )
}

export default List
