import s from './List.module.css'
const List = ({ messages, Dlt }) => {
  return (
    <ul className={s.list}>
      {messages.map((message) => (
        <li key={message.id} className={s.listItem}>
          <p className={s.userName}>
            {message.name} :<span className={s.textAria}>{message.text}</span>
          </p>

          <button
            className={s.dltBtn}
            type="button"
            onClick={() => Dlt(message.id)}
          >
            Dlt
          </button>
        </li>
      ))}
    </ul>
  )
}

export default List
